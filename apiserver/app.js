import express from 'express'
import fetch from 'node-fetch'
import cors from 'cors'

const app = express()

app.use(cors())

import promiseRetrieve from './fetchjson.js';

app.get ('/', (req,res) => res.send('Hello World!'))

let url = "https://phl.carto.com/api/v2/sql?q=SELECT%20*%20FROM%20shootings";

let settings = {method: "Get"};

/*
app.get ('/', (req,res) => {
    let p = asyncRetrieve();
    p.then(function(result) {
        res.send(result);
    });
})
*/

app.get('/info', (req, res) => {
    //res.status(200).json({info: 'test'})
    let p = asyncRetrieve();
    p.then(function(result) {
        console.log(result)
        return result
    })
    .then(function(result) {
        res.status(200).send(result)
    })
})

app.listen (3001, () => {    
    console.log('server start')
    /*
    let p = asyncRetrieve();
    p.then(function(result) {
        console.log(result);
    });
    */
})

async function asyncRetrieve() {
    var data = await promiseRetrieve();
    return data;
}