import fetch from 'node-fetch';

let url = "https://phl.carto.com/api/v2/sql?q=SELECT%20*%20FROM%20shootings";

let settings = {method: "Get"};

fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        console.log(json);
    });