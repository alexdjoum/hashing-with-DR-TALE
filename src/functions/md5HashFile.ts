import {createMD5} from "hash-wasm";

const chunkSize = 64 * 1024 * 1024;
const fileReader = new FileReader();
let hasher: any = null;

function hashChunk(chunk: Blob): Promise<void> {
    return new Promise((resolve, reject) => {
        fileReader.onload = async (e: ProgressEvent<FileReader>) => {
            const view = new Uint8Array(e.target!.result as ArrayBuffer);
            hasher.update(view);
            resolve();
        };

        fileReader.readAsArrayBuffer(chunk);
    });
}
export async function readFile(file: File): Promise<string> {
    if (hasher) {
        hasher.init();
    } else {
        // Remplacez `hashwasm.createMD5()` par l'import réel de votre bibliothèque de hachage
        hasher = await createMD5();
    }

    const chunkNumber = Math.floor(file.size / chunkSize);

    for (let i = 0; i <= chunkNumber; i++) {
        const chunk = file.slice(
            chunkSize * i,
            Math.min(chunkSize * (i + 1), file.size)
        );
        await hashChunk(chunk);
    }

    const hash = hasher.digest();
    return Promise.resolve(hash);
}