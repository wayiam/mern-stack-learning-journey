
//Here the "require()" is a Node.js Module. Modules are nothing but the prewritten functions
//We can use this prewriteen function in our web app to make the server side app or webapp
//Which will be listening to the particular port and whenever the request are being made
//Our Webapp(server) will respond with the logic we have defined

let http = require('http');
let todo = require('./myDateTime.js')


http.createServer(function (req, res){
    res.writeHead(200, {'content-type': 'json'});
    res.write("The date and time are currently: " + todo.myDateTime());
    console.log(req.url)
    res.end('Hello World');
}).listen(8080)


