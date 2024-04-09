import express from 'express';
const app = express()

//const fetching = require("./fetchjson");

import grabjson from './fetchjson.js';

//app.get ('/', (req,res) => res.send('Hello World!'))

app.get ('/', (req,res) => {
    var data = {};
    
    grabjson()
        .then(res => res.json())
        .then((json) => {
            //console.log(typeof json);
            //console.log(json);
            //console.log("test");
            //var rta =  Object.values(json).filter(it => it.fatal === 1);  
            //console.log(rta);
            //console.log(json);
            //console.log(Object.keys(json)[0]);
            
            //this was finally what was helpful
            //console.log(json.rows);

            //var rta =  Object.values(json.rows).filter(it => it.fatal === 1);
            //var rta =  Object.values(json.rows).filter(it => it.year === 2024);
            //var rta =  Object.values(json.rows).filter(it => it.date === "2024-02-20T00:00:00Z");
            //var rta =  Object.values(json.rows).filter(it => it.date === "'2024-02-20T00:00:00Z'");
            //var rta =  Object.values(json.rows).filter(it => it.sex === "M");
            //var rta =  Object.values(json.rows).filter(it => it.location === "1700 BLOCK W Luzerne St");
            //var rta =  Object.values(json.rows).filter(it => it.date_ === "2015-05-25T00:00:00Z");
            //var rta =  Object.values(json.rows).filter(it => it.date_ === "2024-02-20T00:00:00Z");
            data =  Object.values(json.rows).filter(it => it.date_ === "2024-04-03T00:00:00Z");
            //console.log(data);
            //res.send('Hello World!123');
            res.send(JSON.stringify(data));
            //console.log(rta);
        });
})

//app.get ('/data')
//res.send(fetchJsonFunction))
//add "/data" after the port in the browser
//app.listen (3001, () => console.log('server ready'))
//app.listen (3001, () => console.log(fetchjson.grabjson()))

//app.listen (3001, () => console.log(grabjson()))
//app.listen (3001, () => console.log(grabjson().then((result) => console.log(result))))
//app.listen (3001, () => grabjson().then((result => console.log(result.rows.filter(it => it.date_ === "2024-04-03T00:00:00Z")))))

/*
app.listen (3001, () => {
    grabjson().then((result) => console.log(result))
})
*/

app.listen (3001, () => {
    var data = {};
    
    grabjson()
        .then(res => res.json())
        .then((json) => {
            //console.log(typeof json);
            //console.log(json);
            //console.log("test");
            //var rta =  Object.values(json).filter(it => it.fatal === 1);  
            //console.log(rta);
            //console.log(json);
            //console.log(Object.keys(json)[0]);
            
            //this was finally what was helpful
            //console.log(json.rows);

            //var rta =  Object.values(json.rows).filter(it => it.fatal === 1);
            //var rta =  Object.values(json.rows).filter(it => it.year === 2024);
            //var rta =  Object.values(json.rows).filter(it => it.date === "2024-02-20T00:00:00Z");
            //var rta =  Object.values(json.rows).filter(it => it.date === "'2024-02-20T00:00:00Z'");
            //var rta =  Object.values(json.rows).filter(it => it.sex === "M");
            //var rta =  Object.values(json.rows).filter(it => it.location === "1700 BLOCK W Luzerne St");
            //var rta =  Object.values(json.rows).filter(it => it.date_ === "2015-05-25T00:00:00Z");
            //var rta =  Object.values(json.rows).filter(it => it.date_ === "2024-02-20T00:00:00Z");
            data =  Object.values(json.rows).filter(it => it.date_ === "2024-04-03T00:00:00Z");
            console.log(data);
            //console.log(rta);
        });
})