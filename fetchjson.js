import fetch from 'node-fetch';

let url = "https://phl.carto.com/api/v2/sql?q=SELECT%20*%20FROM%20shootings";

let settings = {method: "Get"};

export const grabjson = () => {
    var data = {};

    return fetch(url, settings)
}

/*
export const grabjson = () => {
    var data = {};

    fetch(url, settings)
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
            //console.log(rta);
            return "Hello world";
        });
    //return "Hello world";
}
*/


export default grabjson;

//module.exports = { grabjson };
//export default grabjson()
