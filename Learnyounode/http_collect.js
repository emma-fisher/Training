var http = require('http');
var body = '';

http.get(process.argv[2], function(response) {
	response.on('data', function(chunk) {
		body += chunk;
	});
	response.on('end', function() {
		console.log(body.length);
		console.log(body);
	});
});