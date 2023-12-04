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
    // const address = 'https://localhost:8080/default.html?year=2022&month=December';
    // const parseUrl = url.parse(address, true);
    // var url_data = parseUrl.host;
    var url_data = url.parse(req.url,true).query;
    // console.log(url_data);
    // console.log(`url nav-  ${req.url}`);
    console.log(url_data);
    if (req.url == '/index'){
        res.write("<h1>This is a index page</h1>");
       
    }else if (req.url == '/services'){
        res.write("<h1>This is a service page</h1>");
    }
    // console.log(JSON.stringify(req));

    res.end() 
}).listen(8080);

