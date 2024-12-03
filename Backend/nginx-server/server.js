const fs = require('fs');
const http = require('http');
const path = require('path');

const port = 3000;


const server = http.createServer((req, res)=> {
  const filepath = path.join(__dirname, req.url === "/" ? "index.html" : req.url )
  console.log(filepath);
  const extName = String(path.extname(filepath)).toLowerCase();

  const mimeTypes = {
    '.html': 'text/html',
    '.css' : 'text/css',
    '.js'  : 'text/js',
    '.png' : 'text/png'
    }
    const contentType = mimeTypes[extName] || 'application/octet-stream';

    fs.readFile(filepath, (err, content)=>{
      if (err) {
        if(err.code === 'ENOENT'){
          res.writeHead(404, {'Content-type': "text/html"})
          res.end('404: file not found not bruh');
        }
      } else {
        res.writeHead(200, {'Content-Type': contentType})
        console.log(content);
        
        res.end(content, "utf-8")
      }
    })
});

server.listen(port, ()=> {
 console.log("Server is listening on port", port);
})

