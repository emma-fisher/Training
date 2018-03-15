var http = require('http');
var fs = require('fs');

var file = process.argv[3];

var server = http.createServer(function(request, response) {
	fs.createReadStream(file).pipe(response);
})
var port = process.argv[2];
server.listen(+port);