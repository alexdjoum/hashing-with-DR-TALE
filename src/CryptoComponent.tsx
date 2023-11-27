
import React,  { useState } from 'react';
import { sha256 } from './functions/sha256_functions';
import {md5} from './functions/md5 functions'
import {sha1} from './functions/sha1'
import Input from '@mui/material/Input';
import { styled } from '@mui/material/styles';
import {Button, Chip, FormControl, InputLabel, MenuItem, Select, Stack, TextField} from "@mui/material";
import SendIcon from "@mui/icons-material/Send"



function CryptoComponent() {
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
        <div>
            <br />
            <FormControl>
                <InputLabel id="demo-simple-select-label">Hashing algorithm</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={hashAlgorithm}
                    label="Algorithme de hachage"
                    onChange={(e) =>
                    {
                        setHashedValue('');
                        setHashAlgorithm(e.target.value)}
                    }
                >
                    <MenuItem value="md5">Md5</MenuItem>
                    <MenuItem value="sha256">Sha-256</MenuItem>
                    <MenuItem value="sha1">Sha1</MenuItem>

                </Select>
            </FormControl>
            <br/>
            {/*<label>
                Choisissez l'algorithme de hachage :
                <select
                    value={hashAlgorithm}
                    onChange={(e) =>
                    {
                        setHashedValue('');
                        setHashAlgorithm(e.target.value)}
                    }
                >
                    <option value="md5">MD5</option>
                    <option value="sha256">SHA-256</option>
                </select>
            </label>*/}
            <br />
            {/*<input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={handleHash}>Hacher</button>
            <p>Valeur hachée en {hashAlgorithm}: {hashedValue === ""
                ? "veillez Entrer la valeur à hacher et ensuite cliquer sur le bouton": hashedValue}
            </p>*/}

            <TextField
                id="outlined-controlled"
                label="Value to hash"
                value={inputValue}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setInputValue(event.target.value);
                }}
            />
            <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={handleHash}
                size="large"
            >
                Send
            </Button>

            <p>
                Valeur hachée en 
                <Chip label={hashAlgorithm} color="primary" />

                : {hashedValue === ""
                ? "veillez Entrer la valeur à hacher et ensuite cliquer sur le bouton": hashedValue}
            </p>
        </div>
    );
}

export default CryptoComponent;