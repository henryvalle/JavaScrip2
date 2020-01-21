var http = require('http');
var url = require('url');

function iniciar(route, handle) {
	http.createServer(function handler(req, res) {
		
		var dataPosteada = "";
        var pathname = url.parse(req.url).pathname;        
	    console.log("Petición para " + pathname + " recibida.");
	    
	    req.setEncoding('utf8');
	    req.addListener('data', function(trozoPosteado) {
		    dataPosteada += trozoPosteado;
		    console.log("Recibido trozo POST '" + trozoPosteado + "'.");
	    });
	    
	    req.addListener("end", function() {
	    	route(handle, pathname, res, dataPosteada);
	    });
	    
	}).listen(8888, '127.0.0.1');
	console.log('Server running at http://127.0.0.1:8888/');
	console.log("Servidor Iniciado.");
}
exports.iniciar = iniciar;


//var http = require('http');
//var url = require('url');
//
//function iniciar(route, handle) {
//	http.createServer(function handler(req, res) {
//        var pathname = url.parse(req.url).pathname;
//	    console.log("Petición para " + pathname + " recibida.");
//	    route(handle, pathname, res);
//	    //res.writeHead(200, {'Content-Type': 'text/html'});
//	    //var content = route(handle, pathname);
//	    //res.write(content);
//	    //res.end();
//	}).listen(8888, '127.0.0.1');
//	console.log('Server running at http://127.0.0.1:8888/');
//	console.log("Servidor Iniciado.");
//}
//exports.iniciar = iniciar;
