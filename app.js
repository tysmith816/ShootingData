const express = require ('express')
const app = express()

app.get ('/', (req,res) => res.send('Hello World!'))
//app.get ('/data')
//res.send(fetchJsonFunction))
//add "/data" after the port in the browser
app.listen (3001, () => console.log('server ready'))
