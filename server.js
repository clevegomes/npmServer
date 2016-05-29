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

 


 
 