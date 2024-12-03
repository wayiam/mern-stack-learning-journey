const http = require('http');
const hostName = '127.0.0.1'
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain')
        res.end('Hello From Home')
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain')
        res.end('Hello From about')
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain')
        res.end('404, error')
    }
});

server.listen(port, hostName, () => {
    console.log(`Sever is listening at the http//${hostName}:${port}`);

})