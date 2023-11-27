
import React,  { useState } from 'react';
import {md5} from "./functions/md5 functions";
import {sha256} from "./functions/sha256_functions";
import {sha1} from "./functions/sha1";
import {Chip} from "@mui/material";
import {Link} from "react-router-dom";


function DesignForm() {
    const [inputValue, setInputValue] = useState('');
    const [hashedValue, setHashedValue] = useState('');
    const [hashAlgorithm, setHashAlgorithm] = useState('md5');

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

    return (
        <>
            <div className="wrapper">

                <div className="logo">
                    <img src="/enspy.png"
                         alt="" />
                </div>
                <div className="text-center mt-4 name">
                    Choose your hash function
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
                            {/*<option value="sha1">sha1</option>*/}
                        </select>
                        {/*<input type="text" name="userName" id="userName" placeholder="Username" />*/}
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-key"></span>

                        <input
                            type=""
                            //name="message"
                            //id="message"
                            //placeholder="Password"
                            value={inputValue}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setInputValue(event.target.value)}}
                        />
                    </div>
                    <button
                        className="btn mt-3"
                        onClick={handleHash}>Click here to hash
                    </button>
                </form>
                <p className="indicate">
                    Valeur hachée en
                    <span style={{color: "blue"}}> {hashAlgorithm} </span>

                    :
                    <br/>
                    <br/>
                    {hashedValue === ""
                    ? "veillez Entrer la valeur à hacher et ensuite cliquer sur le bouton": hashedValue}
                </p>
                <div className="text-center fs-6">
                    <span
                        className="teacher"
                        style={{
                            position: "absolute",
                            color:"#039BE5",
                            bottom: "26%",
                            right: "36%",
                            fontSize: "18px"
                        }}
                    >Sous la supervision de DR Hervé TALE KALACHI</span>
                    <br/>

                    <span
                        style={{
                            position: "absolute",
                            top: "76%",
                            right: "36%"
                    }}>Année Academique 2023-2024</span>

                    <Link
                        style={{
                            fontSize: "26px"
                        }}
                        className="link-to-hash-file"
                        to="/DesignHashFile"
                    >
                        Click here to hash a file
                    </Link>
                </div>
            </div>
        </>
    );
}

export default DesignForm;