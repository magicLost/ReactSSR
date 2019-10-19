//import 'babel-polyfill';
import ReactDOM from "react-dom";
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from 'react-redux';
import Routes from "./Routes";
import reducers from './reducers/index';

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>, document.querySelector('#root'));