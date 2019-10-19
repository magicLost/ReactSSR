import express from "express";
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {

    const content = renderToString(<Home />);

    const html = `
        <html lang="en">
            <head>
                <title>Home page</title>
            </head>
            <body><div id="root">${content}</div></body>
            <script type="text/javascript" src="bundle.js"></script>
        </html>
    `;

    res.send(html);
});

app.listen(3000, () => {

    console.log("Listening on port 3000");

});