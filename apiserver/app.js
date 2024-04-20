import express from 'express'
import fetch from 'node-fetch'
import cors from 'cors'

import fetchjson from './fetchjson.js';

const app = express()
app.use(cors())

app.get ('/', (req,res) => {
    fetchjson.grabRawJson()
        .then(res => res.json())
        .then((json) => {
            res.send(JSON.stringify(json))
        })
})

app.get('/info', (req, res) => {
    let p = asyncGrabSpecificDate();
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
})

async function asyncGrabSpecificDate() {
    var data = await fetchjson.grabSpecificDate()
    return data
}