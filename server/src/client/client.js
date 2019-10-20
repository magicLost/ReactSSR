//import 'babel-polyfill';
import ReactDOM from "react-dom";
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from 'react-redux';
import routes from "./routes";
import {renderRoutes} from 'react-router-config';
import reducers from './reducers/index';

const store = createStore(
    reducers,
    window.INITIAL_STATE,
    applyMiddleware(thunk)
);

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <>{renderRoutes((routes))}</>
        </BrowserRouter>
    </Provider>, document.querySelector('#root'));