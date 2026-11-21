document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const hashAlgoSelect = document.getElementById('hashAlgo');
    const generateBtn = document.getElementById('generateBtn');
    const copyBtn = document.getElementById('copyBtn');

    // MD5 is intentionally implemented locally because Web Crypto does not expose MD5.
    // MD5 is provided for compatibility only; do not use it for security-sensitive purposes.
    function md5(bytes) {
        const shifts = [7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,
            5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,
            4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,
            6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21];
        const constants = Array.from({ length: 64 }, (_, i) => Math.floor(Math.abs(Math.sin(i + 1)) * 0x100000000) >>> 0);
        const bitLength = BigInt(bytes.length) * 8n;
        const paddedLength = Math.ceil((bytes.length + 9) / 64) * 64;
        const data = new Uint8Array(paddedLength);
        data.set(bytes);
        data[bytes.length] = 0x80;
        for (let i = 0; i < 8; i++) data[paddedLength - 8 + i] = Number((bitLength >> BigInt(i * 8)) & 0xffn);

        let a0 = 0x67452301, b0 = 0xefcdab89, c0 = 0x98badcfe, d0 = 0x10325476;
        const view = new DataView(data.buffer);
        for (let offset = 0; offset < paddedLength; offset += 64) {
            let a = a0, b = b0, c = c0, d = d0;
            for (let i = 0; i < 64; i++) {
                let f, g;
                if (i < 16) { f = (b & c) | (~b & d); g = i; }
                else if (i < 32) { f = (d & b) | (~d & c); g = (5 * i + 1) % 16; }
                else if (i < 48) { f = b ^ c ^ d; g = (3 * i + 5) % 16; }
                else { f = c ^ (b | ~d); g = (7 * i) % 16; }
                const word = view.getUint32(offset + g * 4, true);
                const sum = (a + f + constants[i] + word) >>> 0;
                const shift = shifts[i];
                const rotated = ((sum << shift) | (sum >>> (32 - shift))) >>> 0;
                const nextB = (b + rotated) >>> 0;
                a = d; d = c; c = b; b = nextB;
            }
            a0 = (a0 + a) >>> 0;
            b0 = (b0 + b) >>> 0;
            c0 = (c0 + c) >>> 0;
            d0 = (d0 + d) >>> 0;
        }
        return [a0, b0, c0, d0].map(word => [0,8,16,24].map(shift => ((word >>> shift) & 0xff).toString(16).padStart(2, '0')).join('')).join('');
    }

    generateBtn.addEventListener('click', async () => {
        const text = inputText.value;
        const algo = hashAlgoSelect.value;
        try {
            const bytes = new TextEncoder().encode(text);
            if (algo === 'MD5') {
                outputText.value = md5(bytes);
            } else {
                if (!window.crypto?.subtle) throw new Error('Web Crypto is unavailable. Use HTTPS or localhost.');
                const digest = await crypto.subtle.digest(algo, bytes);
                outputText.value = Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('');
            }
        } catch (error) {
            console.error('Hash generation failed:', error);
            alert(error.message || 'Could not generate the selected hash.');
        }
    });

    copyBtn.addEventListener('click', async () => {
        if (!outputText.value) {
            alert('Generate a hash first.');
            return;
        }
        try {
            await navigator.clipboard.writeText(outputText.value);
            alert('Copied to clipboard!');
        } catch (error) {
            outputText.focus();
            outputText.select();
            try {
                if (!document.execCommand('copy')) throw new Error('Copy failed');
                alert('Copied to clipboard!');
            } catch (copyError) {
                alert('Unable to copy automatically. Please copy the selected hash manually.');
            }
        }
    });
});
