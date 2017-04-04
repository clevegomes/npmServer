var connect = require('connect');
var serveStatic = require('serve-static');
connect()
.use(serveStatic(__dirname, {
  'index': false
  ,'setHeaders': setHeaders
}))
.listen(5556, function(){
    console.log('Server running on 5556...');
});



// Set header to force download 
function setHeaders(res, path) {
 
	 res.setHeader("Access-Control-Allow-Credentials", true);
	 res.setHeader("Access-Control-Allow-Origin", "*");
	 res.setHeader("Cache-Control", "no-cache");
	 res.setHeader("Content-Type", "application/json; charset=utf-8");
}

 

//For HTML RENDER
// var finalhandler = require('finalhandler')
// var http = require('http')
// var serveStatic = require('serve-static')
 
// // Serve up public/ftp folder 
// var serve = serveStatic(__dirname, {'index': ['index.html', 'index.htm']})
 
// // Create server 
// var server = http.createServer(function onRequest (req, res) {
//   serve(req, res, finalhandler(req, res))
// })
 
// // Listen 
// server.listen(5556,function(){
//     console.log('Server running on 5556...');
// });
 



 
 
