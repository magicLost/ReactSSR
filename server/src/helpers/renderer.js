import React from 'react';
import { renderToString } from 'react-dom/server';
import routes from "../client/routes";
import {renderRoutes} from 'react-router-config';
import {StaticRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import serialize from 'serialize-javascript';

export default (req, store) => {

    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <>{renderRoutes((routes))}</>
            </StaticRouter>
        </Provider>
    );

    return `
        <html lang="en">
            <head>
                <title>Home page</title>
            </head>
            <body><div id="root">${content}</div></body>
            <script>
                window.INITIAL_STATE = ${serialize(store.getState())}
            </script>
            <script type="text/javascript" src="bundle.js"></script>
        </html>
    `;
};