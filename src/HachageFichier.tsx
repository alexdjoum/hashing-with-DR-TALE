import React, {ChangeEvent, useState} from 'react';
//import md5 from "md5";
//import {createMD5} from "hash-wasm"
//import { sha256 } from 'js-sha256';
import {readFile}  from "./functions/md5HashFile"



function HachageFichier() {
    const [hash, setHash] = useState("");
    const [duration, setDuration] = useState(0);
    const [throughput, setThroughput] = useState(0);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files![0];
        setSelectedFile(file);
        setHash("");
        setDuration(0);
        setThroughput(0)
    };

    const handleHashButtonClick = async () => {
        if (selectedFile) {
            const start = Date.now();
            const hash = await readFile(selectedFile);
            const end = Date.now();
            const fileSizeMB = selectedFile.size / 1024 / 1024;
            const duration = end - start;
            const throughput = fileSizeMB / (duration / 1000);

            setHash(hash);
            setDuration(duration);
            setThroughput(throughput);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleHashButtonClick}>Hasher le fichier</button>
            {hash && (
                <div>
                    <p>Hash : {hash}</p>
                    <p>Durée : {duration} ms</p>
                    <p>Débit : {throughput.toFixed(2)} Mo/s</p>
                </div>
            )}
        </div>
    );
}

export default HachageFichier;
