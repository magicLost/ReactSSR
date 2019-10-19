import React from 'react';
import { renderToString } from 'react-dom/server';
import Routes from "../client/Routes";
import {StaticRouter } from 'react-router-dom';

export default (req) => {

    const content = renderToString(
        <StaticRouter location={req.path} context={{}}>
            <Routes/>
        </StaticRouter>
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