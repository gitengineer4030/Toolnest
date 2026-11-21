document.addEventListener('DOMContentLoaded', () => {
    const pickerTypeSelect = document.getElementById('pickerType');
    const numberOptions = document.getElementById('numberOptions');
    const listOptions = document.getElementById('listOptions');
    const minNumInput = document.getElementById('minNum');
    const maxNumInput = document.getElementById('maxNum');
    const itemsListTextarea = document.getElementById('itemsList');
    const pickBtn = document.getElementById('pickBtn');
    const resultContainer = document.getElementById('resultContainer');
    const resultDisplay = document.getElementById('result');

    function secureRandomInt(maxExclusive) {
        if (!Number.isSafeInteger(maxExclusive) || maxExclusive < 1) {
            throw new RangeError('The selection range is invalid or too large.');
        }
        if (!window.crypto || typeof crypto.getRandomValues !== 'function') {
            throw new Error('Secure random selection is unavailable. Use HTTPS or localhost.');
        }
        const range = 1n << 53n;
        const limit = range - (range % BigInt(maxExclusive));
        const bytes = new Uint8Array(7);
        let value;
        do {
            crypto.getRandomValues(bytes);
            value = (BigInt(bytes[0] & 0x1f) << 48n) |
                (BigInt(bytes[1]) << 40n) | (BigInt(bytes[2]) << 32n) |
                (BigInt(bytes[3]) << 24n) | (BigInt(bytes[4]) << 16n) |
                (BigInt(bytes[5]) << 8n) | BigInt(bytes[6]);
        } while (value >= limit);
        return Number(value % BigInt(maxExclusive));
    }

    pickerTypeSelect.addEventListener('change', () => {
        const useNumbers = pickerTypeSelect.value === 'number';
        numberOptions.classList.toggle('hidden', !useNumbers);
        listOptions.classList.toggle('hidden', useNumbers);
    });

    pickBtn.addEventListener('click', () => {
        try {
            let result;
            if (pickerTypeSelect.value === 'number') {
                const min = Number(minNumInput.value);
                const max = Number(maxNumInput.value);
                if (!Number.isSafeInteger(min) || !Number.isSafeInteger(max) || min > max || (max - min + 1) > Number.MAX_SAFE_INTEGER) {
                    alert('Please enter valid whole-number minimum and maximum values.');
                    return;
                }
                result = min + secureRandomInt(max - min + 1);
            } else {
                const items = itemsListTextarea.value.split('\n').map(item => item.trim()).filter(Boolean);
                if (items.length === 0) {
                    alert('Please enter items in the list.');
                    return;
                }
                result = items[secureRandomInt(items.length)];
            }
            resultDisplay.textContent = String(result);
            resultContainer.classList.remove('hidden');
        } catch (error) {
            alert(error.message || 'Could not select a random result.');
        }
    });

    pickerTypeSelect.dispatchEvent(new Event('change'));
});
