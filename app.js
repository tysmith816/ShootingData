import express from 'express';
import fetch from 'node-fetch';

const app = express()

//const fetching = require("./fetchjson");

//import grabjson from './fetchjson.js';
//import promiseRetrieve from './fetchjson.js';

//app.get ('/', (req,res) => res.send('Hello World!'))

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

app.listen (3001, () => {    
    console.log('server start')
    let p = asyncRetrieve();
    p.then(function(result) {
        console.log(result);
    });
})

const testGrab = () => fetch(url, settings)

function promiseRetrieve(){
    return new Promise((resolve) => {
        testGrab()
        .then(res => res.json())
        .then((json) => {
            var data = {};
            data =  Object.values(json.rows).filter(it => it.date_ === "2024-04-03T00:00:00Z");
            return data;
        })
        .then(data => {
            resolve(data);
        });
    })
}

async function asyncRetrieve() {
    var data = await promiseRetrieve();
    return data;
}