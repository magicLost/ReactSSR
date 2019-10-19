import ReactDOM from "react-dom";
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from "./Routes";

ReactDOM.hydrate(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
    , document.querySelector('#root'));