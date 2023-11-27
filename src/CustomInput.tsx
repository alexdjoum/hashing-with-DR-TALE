import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

type CustomInputProps = TextFieldProps & {
    customStyle?: React.CSSProperties;
};

const CustomInput: React.FC<CustomInputProps> = ({ customStyle, ...rest }) => {
    return (
        <TextField
            {...rest}
            style={customStyle}
        />
    );
};

export default CustomInput;