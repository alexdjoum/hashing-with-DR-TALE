import React from 'react';
//import logo from './logo.svg';
import './App.css';
import CryptoComponent from "./CryptoComponent";
import HachageFile from "./HachageFichier";
import CryptoComponent2 from "./CryptoComponent2";
//import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {
    Experimental_CssVarsProvider as CssVarsProvider,
    //useColorScheme,
} from '@mui/material/styles';
import DesignForm from "./DesignForm";
import DesignHashFile from "./DesignHashFile";

function App() {
  return (
    <>
        <BrowserRouter basename="/">
            <Routes>
                <Route
                    element={<DesignForm />}
                    path="/" />
                <Route
                    element={<DesignHashFile />}
                    path="/DesignHashFile" />{/* 👈 Renders at /app/ */}
            </Routes>

        </BrowserRouter>
      {/*<CryptoComponent />*/}
       {/* <HachageFichier />*/}
        {/*<CssVarsProvider>*/}
            {/*<CryptoComponent2 />*/}
            {/*<HachageFile />*/}

            {/*<CryptoComponent />*/}
        {/*</CssVarsProvider>*/}
    </>
  );
}

export default App;
