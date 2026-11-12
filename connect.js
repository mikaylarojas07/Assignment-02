let connect = require('connect');
let http = require('http');
 
let app = connect();
 
// respond to all requests
app.use('/home', function(req, res){
  res.end('Hello from Connect!\n');
});

app.use('/about', function(req, res){
  res.end('This page is about Connect!\n');
});
 
//create node.js http server and listen on port
http.createServer(app).listen(3000);