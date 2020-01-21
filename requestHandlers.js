//var exec = require('child_process').exec;
var querystring = require('querystring');

function iniciar(res, postData) {
	console.log("Manipulador de peticion 'inicio' fue llamado.");
	var body = '<html>' +
	'<head>' +
	'<meta http‐equiv="Content‐Type" content="text/html; charset=UTF‐8" />'+
	'</head>'+
	'<body>'+
	'<form action="/subir" method="post">'+
	'<textarea name="text" rows="20" cols="60"></textarea>'+
	'<input type="submit" value="Enviar texto" />'+
	'</form>'+
	'</body>'+
	'</html>';
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(body);
	res.end();
	}


function subir(res, dataPosteada) {
	console.log("Manipulador de petición 'subir' fue llamado.");
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write("Tu enviaste el texto: : " + querystring.parse(dataPosteada)['text']);
	res.end();
}

exports.iniciar = iniciar;
exports.subir = subir;


//var exec = require('child_process').exec;
//
//function iniciar(res) {
//	console.log("Manipulador de peticiones 'iniciar' fue llamado.");
//	var body = '<html>' +
//	'<head>' +
//	'<meta http‐equiv="Content‐Type" content="text/html; charset=UTF‐8" />'+
//	'</head>'+
//	'<body>'+
//	'<form action="/subir" method="post">'+
//	'<textarea name="text" rows="20" cols="60"></textarea>'+
//	'<input type="submit" value="Enviar texto" />'+
//	'</form>'+
//	'</body>'+
//	'</html>';
//	res.writeHead(200, {'Content-Type': 'text/html'});
//	res.write(body);
//	res.end();
//	}
//
//
//function subir(res) {
//	console.log("Manipulador de petición 'subir' fue llamado.");
//	res.writeHead(200, {'Content-Type': 'text/html'});
//	res.write("Hola Subir");
//	res.end();
//}
//
//exports.iniciar = iniciar;
//exports.subir = subir;

