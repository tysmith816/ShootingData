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

app.get('/info/:dynamic', (req, res) => {
    const { dynamic } = req.params

    let p = asyncGrabSpecificDate(dynamic);
    p.then(function(result) {
        return result
    })
    .then(function(result) {
        res.status(200).send(result)
    })
})

app.listen (3001, () => {    
    console.log('server start')
})

async function asyncGrabSpecificDate(date) {
    var data = await fetchjson.grabSpecificDate(date)
    return data
}