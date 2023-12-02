var http = require('http');
var greetFunc = require('./greating');
var url = require('url');
const fs = require('fs');
const path = require('path');


http.createServer(function(req , res){
    res.writeHead(200, {'content-Type':'text/html'})
    res.write(greetFunc.Greet("Dishika"))
  
    console.log("server running on port 8080")
    // var url_data = url.parse(req.url,true).query;
    const address = 'https://localhost:8080/default.html?year=2022&month=December';
    const parseUrl = url.parse(address, true);
    var url_data = parseUrl.host;
    // console.log(url_data);
    console.log(`url nav-  ${req.url}`);
    
    if (req.url == '/index'){
        // res.write(Index.html);
        fs.readFile(path.join(__dirname, 'Index.html'), 'utf8', (err, data) => {
            if (err) {
              // Handle the error
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Internal Server Error');
            } else {
              // Send the content of index.html
              res.writeHead(200);
              res.end(data);
            }
          });
    }else if (req.url == '/services'){
        res.write("<h1>This is a service page</h1>");
    }
    // console.log(JSON.stringify(req));

    res.end() 
}).listen(8080);

