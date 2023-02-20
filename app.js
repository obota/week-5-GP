//entry point of node js
var http = require('http'); 

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Your node server is running on port 7000');
}).listen(7000);

console.log("Server running on port 7,000");