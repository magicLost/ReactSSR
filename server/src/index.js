//import 'babel-polyfill';
import express from "express";
import renderer from "./helpers/renderer";
import routes from "./client/routes";
import {matchRoutes} from 'react-router-config';
import createStore from "./helpers/createStore";

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {

    const store = createStore();

    //we use matchRoutes to know what component we must render
    const promises = matchRoutes(routes, req.path).map(({route}) => {
        return route.loadData ? route.loadData(store) : null;
    });

    Promise.all(promises).then(() => {

        res.send(renderer(req, store));

    }).catch(() => { res.send("Oppssss!");} );

});

app.listen(3000, () => {

    console.log("Listening on port 3000");

});