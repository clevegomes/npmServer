var connect = require('connect');
var serveStatic = require('serve-static');
connect()
.use(serveStatic(__dirname, {
  'index': false,
  'setHeaders': setHeaders
}))
.listen(5556, function(){
    console.log('Server running on 5556...');
});



// Set header to force download 
function setHeaders(res, path) {
 // res.setHeader('Content-Disposition', contentDisposition(path))
	 res.setHeader("Access-Control-Allow-Credentials", true);
	 res.setHeader("Access-Control-Allow-Credentials", true);
	 res.setHeader("Cache-Control", "no-cache");
	 res.setHeader("Content-Encoding", "gzip");
	 res.setHeader("Content-Type", "application/json; charset=utf-8");
}

 

