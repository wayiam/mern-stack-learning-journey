var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('dogpic.webp', function(err, data) {
    res.writeHead(200, {'Content-Type': 'image/png'});
    res.write(data);
    return res.end();
  });
}).listen(8080);