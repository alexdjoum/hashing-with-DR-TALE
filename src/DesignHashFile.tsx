
import React, {ChangeEvent, useState} from 'react';
import {md5} from "./functions/md5 functions";
import {sha256} from "./functions/sha256_functions";
import {sha1} from "./functions/sha1";
import {Link} from "react-router-dom";
import DesignForm from "./DesignForm";
import {readFile} from "./functions/md5HashFile";


function DesignHashFile() {
    const [inputValue, setInputValue] = useState('');
    const [hashedValue, setHashedValue] = useState('');
    const [hashAlgorithm, setHashAlgorithm] = useState('md5');

    const [hash, setHash] = useState("");
    const [duration, setDuration] = useState(0);
    const [throughput, setThroughput] = useState(0);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleHash = () => {
        let hashedInput = '';

        if (hashAlgorithm === 'md5') {
            hashedInput = md5(inputValue);
        } else if (hashAlgorithm === 'sha256') {
            hashedInput = sha256(inputValue);
        } else if (hashAlgorithm === 'sha1') {
            hashedInput = sha1(inputValue)
        }

        setHashedValue(hashedInput);
    };

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
        <>
            <div className="wrapper">

                <div className="logo">
                    <img src="/enspy.png"
                         alt="" />
                </div>
                <div className="text-center mt-4 name">
                    Choose your hash  function
                </div>
                <form
                    className="p-3 mt-3"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div
                        className="form-field d-flex align-items-center"
                        style={{ paddingRight: "10px"}}>
                        <span className="far fa-user"></span>
                        <select
                            style={{
                                width: "100%",
                                background: "#eef2f400",
                                border: "none",
                                outline: "none",
                                fontSize: "1.2rem",
                                color: "#666",
                                padding: "10px 15px 10px 10px"
                            }}
                            value={hashAlgorithm}
                            onChange={(e) =>
                            {
                                setHashedValue('');
                                setHashAlgorithm(e.target.value)}
                            }>
                            <option value="md5">md5</option>
                            <option value="sha256">sha256</option>
                            <option value="sha1">sha1</option>
                        </select>
                        {/*<input type="text" name="userName" id="userName" placeholder="Username" />*/}
                    </div>
                    <div
                        className="form-field d-flex align-items-center"
                        style={{ paddingRight: "10px"}}>
                        <span className="far fa-user"></span>

                        <input
                            style={{
                                width: "100%",
                                background: "rgba(238, 242, 244, 0)",
                                border: "none",
                                outline: "none",
                                fontSize: "1.2rem",
                                color: "rgb(102, 102, 102)",
                                padding: "10px 15px 10px 10px"
                            }}
                            type="file" onChange={handleFileChange} />



                        {/*<button onClick={handleHashButtonClick}>Hasher le fichier</button>*/}

                        {/*<input type="text" name="userName" id="userName" placeholder="Username" />*/}
                    </div>
                    {hash && (
                        <div>
                            <p>Hash : {hash}</p>
                            <p>Durée : {duration} ms</p>
                            <p>Débit : {throughput.toFixed(2)} Mo/s</p>
                        </div>
                    )}
                    <button
                        className="btn mt-3"
                        onClick={handleHashButtonClick}>Click here to hash
                    </button>
                </form>
               {/* <p>
                    Valeur hachée en
                    <span style={{color: "blue"}}> {hashAlgorithm} </span>

                    :
                    <br/>
                    <br/>
                    {hashedValue === ""
                        ? "veillez Entrer la valeur à hacher et ensuite cliquer sur le bouton": hashedValue}
                </p>*/}
                <div className="text-center fs-6">
                    <span
                        style={{
                            position: "absolute",
                            color:"#039BE5",
                            bottom: "6%",
                            right: "30%",
                            fontSize: "18px"
                        }}
                    >Sous la supervision de DR TALE KALASHI</span>
                    <br/>

                    <span
                        style={{
                            position: "absolute",
                            top: "95%",
                            right: "30%"
                        }}>Année Academique 2023-2024</span>

                    <Link to="/">Click here to hash a Message</Link>
                </div>
            </div>
        </>
    );
}

export default DesignHashFile;