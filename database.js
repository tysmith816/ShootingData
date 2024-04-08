const {Client} = require('pg')

const client = new Client({
    host: "https://phl.carto.com/api/v2/sql",
});

client.connect();

client.query('SELECT * FROM shootings', (err, res)=>{
    if(!err){
        console.log(res.rows);
    }
    else{
        console.log(err.message);
    }
    client.end;
})