export function md5(message: string): string {
    const r: number[] = [
        7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22,
        5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20,
        4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23,
        6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21,
    ];

    const k: number[] = [];
    for (let i = 0; i < 64; i++) {
        k[i] = Math.floor(Math.abs(Math.sin(i + 1)) * Math.pow(2, 32));
    }

    let h0: number = 0x67452301;
    let h1: number = 0xEFCDAB89;
    let h2: number = 0x98BADCFE;
    let h3: number = 0x10325476;

    message += String.fromCharCode(0x80);
    while ((message.length * 8) % 512 !== 448) {
        message += String.fromCharCode(0x00);
    }
    const originalLength = message.length * 8;
    message += String.fromCharCode(originalLength & 0xFF);
    message += String.fromCharCode((originalLength >> 8) & 0xFF);
    message += String.fromCharCode((originalLength >> 16) & 0xFF);
    message += String.fromCharCode((originalLength >> 24) & 0xFF);

    for (let i = 0; i < message.length; i += 64) {
        const chunk = message.slice(i, i + 64);

        const w: number[] = [];
        for (let j = 0; j < 16; j++) {
            const word = chunk.slice(j * 4, (j * 4) + 4);
            w[j] = word.charCodeAt(0) |
                (word.charCodeAt(1) << 8) |
                (word.charCodeAt(2) << 16) |
                (word.charCodeAt(3) << 24);
        }

        let a: number = h0;
        let b: number = h1;
        let c: number = h2;
        let d: number = h3;

        for (let j = 0; j < 64; j++) {
            let f: number;
            let g: number;

            if (j < 16) {
                f = (b & c) | ((~b) & d);
                g = j;
            } else if (j < 32) {
                f = (d & b) | ((~d) & c);
                g = (5 * j + 1) % 16;
            } else if (j < 48) {
                f = b ^ c ^ d;
                g = (3 * j + 5) % 16;
            } else {
                f = c ^ (b | (~d));
                g = (7 * j) % 16;
            }

            const temp = d;
            d = c;
            c = b;
            b = leftRotate((a + f + k[j] + w[g]), r[j]) + b;
            a = temp;
        }

        h0 += a;
        h1 += b;
        h2 += c;
        h3 += d;
    }

    return littleEndianToHex(h0) +
        littleEndianToHex(h1) +
        littleEndianToHex(h2) +
        littleEndianToHex(h3);
}

function leftRotate(value: number, count: number): number {
    return (value << count) | (value >>> (32 - count));
}

function littleEndianToHex(value: number): string {
    let hex = "";
    for (let i = 0; i < 4; i++) {
        hex += ((value >> (i * 8)) & 0xFF).toString(16).padStart(2, "0");
    }
    return hex;
}
