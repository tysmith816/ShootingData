import fetch from 'node-fetch';

let url = "https://phl.carto.com/api/v2/sql?q=SELECT%20*%20FROM%20shootings";

let settings = {method: "Get"};

export const grabjson = () => {
    var data = {};

    return fetch(url, settings)
}

const testGrab = () => fetch(url, settings)

export const promiseRetrieve = () => {
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

//export default grabjson;
export default promiseRetrieve;