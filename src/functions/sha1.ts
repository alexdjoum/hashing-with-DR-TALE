export function sha1(message: string): string {
    function leftRotate(n: number, b: number): number {
        return ((n << b) | (n >>> (32 - b))) >>> 0;
    }

    let h0 = 0x67452301;
    let h1 = 0xEFCDAB89;
    let h2 = 0x98BADCFE;
    let h3 = 0x10325476;
    let h4 = 0xC3D2E1F0;

    const ml = message.length * 8;
    const messageArray = [];

    for (let i = 0; i < message.length; i++) {
        messageArray.push(message.charCodeAt(i));
    }

    messageArray.push(0x80);

    while ((messageArray.length * 8) % 512 !== 448) {
        messageArray.push(0);
    }

    messageArray.push((ml / 0x10000000000) >>> 0);
    messageArray.push((ml / 0x100000000) >>> 0);
    messageArray.push((ml / 0x1000000) >>> 0);
    messageArray.push((ml / 0x10000) >>> 0);
    messageArray.push((ml / 0x100) >>> 0);
    messageArray.push(ml >>> 0);

    const chunks = [];
    for (let i = 0; i < messageArray.length / 64; i++) {
        chunks.push(messageArray.slice(i * 64, (i + 1) * 64));
    }

    for (let chunk of chunks) {
        const w = new Array(80);

        for (let i = 0; i < 16; i++) {
            w[i] = (chunk[i * 4] << 24) | (chunk[i * 4 + 1] << 16) | (chunk[i * 4 + 2] << 8) | chunk[i * 4 + 3];
        }

        for (let i = 16; i < 80; i++) {
            w[i] = leftRotate(w[i - 3] ^ w[i - 8] ^ w[i - 14] ^ w[i - 16], 1);
        }

        let a = h0;
        let b = h1;
        let c = h2;
        let d = h3;
        let e = h4;

        for (let i = 0; i < 80; i++) {
            let f, k;

            if (i < 20) {
                f = (b & c) | (~b & d);
                k = 0x5A827999;
            } else if (i < 40) {
                f = b ^ c ^ d;
                k = 0x6ED9EBA1;
            } else if (i < 60) {
                f = (b & c) | (b & d) | (c & d);
                k = 0x8F1BBCDC;
            } else {
                f = b ^ c ^ d;
                k = 0xCA62C1D6;
            }

            const temp = leftRotate(a, 5) + f + e + k + w[i];
            e = d;
            d = c;
            c = leftRotate(b, 30);
            b = a;
            a = temp;
        }

        h0 = (h0 + a) >>> 0;
        h1 = (h1 + b) >>> 0;
        h2 = (h2 + c) >>> 0;
        h3 = (h3 + d) >>> 0;
        h4 = (h4 + e) >>> 0;
    }

    const hh = (h0 << 128) | (h1 << 96) | (h2 << 64) | (h3 << 32) | h4;
    return hh.toString(16);
}