import fetch from 'node-fetch';

let url = "https://phl.carto.com/api/v2/sql?q=SELECT%20*%20FROM%20shootings";

let settings = {method: "Get"};

const grabRawJson = () => {
    return fetch(url, settings)
}

const grabSpecificDate = (date) => {
    console.log(date)
    return new Promise((resolve) => {
        fetch(url, settings)
            .then(res => res.json())
            .then((json) => {
                var data = {};
                //data =  Object.values(json.rows).filter(it => it.date_ === "2024-04-03T00:00:00Z");
                data =  Object.values(json.rows).filter(it => it.date_ === date);
                return data;
            })
            .then(data => {
                resolve(data);
            })
    })
}

export default {grabRawJson, grabSpecificDate}