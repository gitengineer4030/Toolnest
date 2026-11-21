document.addEventListener('DOMContentLoaded', () => {
    const passwordOutput = document.getElementById('passwordOutput');
    const passwordLength = document.getElementById('passwordLength');
    const lengthValue = document.getElementById('lengthValue');
    const includeUppercase = document.getElementById('includeUppercase');
    const includeLowercase = document.getElementById('includeLowercase');
    const includeNumbers = document.getElementById('includeNumbers');
    const includeSymbols = document.getElementById('includeSymbols');
    const generateBtn = document.getElementById('generateBtn');
    const copyBtn = document.getElementById('copyBtn');

    const groups = [
        { input: includeUppercase, chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
        { input: includeLowercase, chars: 'abcdefghijklmnopqrstuvwxyz' },
        { input: includeNumbers, chars: '0123456789' },
        { input: includeSymbols, chars: '!@#$%^&*()_+-=[]{}|;:,.<>?' }
    ];

    passwordLength.addEventListener('input', () => {
        lengthValue.textContent = passwordLength.value;
    });
    generateBtn.addEventListener('click', generatePassword);
    copyBtn.addEventListener('click', copyPassword);

    function randomInt(maxExclusive) {
        if (!Number.isInteger(maxExclusive) || maxExclusive < 1 || maxExclusive > 256) {
            throw new RangeError('Invalid random range.');
        }
        const limit = 256 - (256 % maxExclusive);
        const byte = new Uint8Array(1);
        do {
            crypto.getRandomValues(byte);
        } while (byte[0] >= limit);
        return byte[0] % maxExclusive;
    }

    function secureShuffle(items) {
        for (let i = items.length - 1; i > 0; i--) {
            const j = randomInt(i + 1);
            [items[i], items[j]] = [items[j], items[i]];
        }
        return items;
    }

    function generatePassword() {
        const selectedGroups = groups.filter(group => group.input.checked);
        if (selectedGroups.length === 0) {
            alert('Please select at least one character type.');
            passwordOutput.value = '';
            return;
        }
        if (!window.crypto || typeof crypto.getRandomValues !== 'function') {
            alert('Secure password generation is unavailable in this browser context. Open ToolNest using HTTPS or localhost.');
            return;
        }

        const length = Number(passwordLength.value);
        if (!Number.isInteger(length) || length < 4 || length > 32 || length < selectedGroups.length) {
            alert('Choose a valid password length that can include every selected character type.');
            return;
        }

        const allChars = selectedGroups.map(group => group.chars).join('');
        const passwordChars = selectedGroups.map(group => group.chars[randomInt(group.chars.length)]);
        while (passwordChars.length < length) {
            passwordChars.push(allChars[randomInt(allChars.length)]);
        }
        passwordOutput.value = secureShuffle(passwordChars).join('');
    }

    async function copyPassword() {
        if (!passwordOutput.value) {
            alert('Generate a password first.');
            return;
        }
        try {
            await navigator.clipboard.writeText(passwordOutput.value);
            alert('Password copied to clipboard!');
        } catch (error) {
            passwordOutput.focus();
            passwordOutput.select();
            try {
                const copied = document.execCommand('copy');
                if (!copied) throw new Error('Clipboard copy was not permitted.');
                alert('Password copied to clipboard!');
            } catch (copyError) {
                alert('Unable to copy automatically. Please copy the selected password manually.');
            }
        }
    }

    generatePassword();
});
