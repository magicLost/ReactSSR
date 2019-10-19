import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/components/Home';

export default () => {

    const content = renderToString(<Home />);

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