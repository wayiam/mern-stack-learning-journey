const http = require('http');
const fs = require('fs');
const upperCase = require('upper-case');

fs.readFile('./lowerCase.txt', 'utf8', (err, data) => {
    if (err) throw err;
    fs.writeFile('upperCase.txt', upperCase.upperCase(data), (err) => {
        if (err) throw err;
        console.log('File converted to uppercase.');
    });
});

http.createServer((req, res) => {
    fs.readFile(req.url.slice(1), (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('File not found');
        } else {
            res.writeHead(200);
            res.end(data);
        }
    });
}).listen(3000, () => console.log('Server running at http://localhost:3000'));
