import React from 'react';
import { renderToString } from 'react-dom/server';
import Routes from "../client/Routes";
import {StaticRouter } from 'react-router-dom';
import {Provider} from 'react-redux';

export default (req, store) => {

    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <Routes/>
            </StaticRouter>
        </Provider>
    );

    return `
        <html lang="en">
            <head>
                <title>Home page</title>
            </head>
            <body><div id="root">${content}</div></body>
            <script type="text/javascript" src="bundle.js"></script>
        </html>
    `;
};