import express from 'express';
const app = express()

//const fetching = require("./fetchjson");

import grabjson from './fetchjson.js';

//app.get ('/', (req,res) => res.send('Hello World!'))
app.get ('/', (req,res) => res.send(grabjson()))
//app.get ('/data')
//res.send(fetchJsonFunction))
//add "/data" after the port in the browser
//app.listen (3001, () => console.log('server ready'))
//app.listen (3001, () => console.log(fetchjson.grabjson()))
app.listen (3001, () => console.log(grabjson()))

