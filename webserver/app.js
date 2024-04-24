const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function(req, res) {
    if (req.url === "/") {
        fs.readFile('index.html', function(error, data) {
            if (error) {
                res.writeHead(404)
                res.write('Error: File Not Found')
            } else {
                res.setHeader('Content-type', 'text/html');
                res.write(data)
                res.statusCode = 200;
                res.end();
            }
        })
    }
    else if (req.url == '/styles.css') {
        res.setHeader('Content-type', 'text/css');
        res.write(fs.readFileSync('styles.css'));
        res.end();
    } else {
        res.write("invalid request")
        res.end();
    }
})

server.listen(port, function(error) {
    if (error) {
        console.log('Server error', error)
    } else {
        console.log('Server is listening on port ' + port)
    }
})