//@ts-check
import React, {useState} from "react";
//import md5 from "md5";
//import {sha256} from "js-sha256";
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid, IconButton, InputAdornment,
    InputLabel,
    Stack,
    OutlinedInput,
    Typography,
    //createTheme,
    useTheme, useMediaQuery,
    // useMediaQuery
} from "@mui/material";


//import SendIcon from "@mui/icons-material/Send";


import {Formik} from 'formik'
import * as Yup from 'yup';

// project imports
//import useScriptRef from 'hooks/useScriptRef';

//import AnimateButton from './ui-component/extended/AnimateButton';
//import {useTheme} from "@mui/material/styles";
//import useScriptRef from "./hooks/useScriptRef";
//import {Visibility, VisibilityOff} from "@mui/icons-material";
//import {useSelector} from "react-redux";
//import {RootState} from "./store/reducer";
//import {State} from "./store/customizationReducer";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AuthWrapper1 from "./AuthWrapper1";
import AuthCardWrapper from "./AuthCardWrapper";
import {Link} from "react-router-dom";
import Logo from "./ui-component/Logo";
import AuthLogin from "./AuthLogin";
import AuthFooter from "./ui-component/cards/AuthFooter";


//import Google from 'assets/images/icons/social-google.svg';


//sx={{ ...theme.typography.customInput }}
function CryptoComponent({ ...others}) {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <AuthWrapper1>
                <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                                <AuthCardWrapper>
                                    <Grid container spacing={2} alignItems="center" justifyContent="center">
                                        <Grid item sx={{ mb: 3 }}>
                                            <Link to="#">
                                                {/* eslint-disable-next-line react/jsx-no-undef */}
                                                <Logo />Alex
                                            </Link>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Grid container direction={matchDownSM ? 'column-reverse' : 'row'} alignItems="center" justifyContent="center">
                                                <Grid item>
                                                    <Stack alignItems="center" justifyContent="center" spacing={1}>
                                                        <Typography color={theme.palette.secondary.main} gutterBottom variant={matchDownSM ? 'h3' : 'h2'}>
                                                            Hi, Welcome Back
                                                        </Typography>
                                                        <Typography variant="caption" fontSize="16px" textAlign={matchDownSM ? 'center' : 'inherit'}>
                                                            Enter your credentials to continue
                                                        </Typography>
                                                    </Stack>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <AuthLogin />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Divider />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Grid item container direction="column" alignItems="center" xs={12}>
                                                <Typography component={Link} to="/pages/register/register3" variant="subtitle1" sx={{ textDecoration: 'none' }}>
                                                    Don&apos;t have an account?
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </AuthCardWrapper>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
                        <AuthFooter />
                    </Grid>
                </Grid>
            </AuthWrapper1>

        </>

    );
}

export default CryptoComponent;


















