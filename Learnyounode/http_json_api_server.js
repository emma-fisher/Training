var http = require('http');
var url = require('url');

function getRegularTime(time) {
	return {
		hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds()
	}
}

function getUnixTime(time) {
	return {
		unixtime: time.getTime()
	}
}

var server = http.createServer(function(request, response) {
	 var parsedUrl = url.parse(request.url, true);
	 var time = new Date(parsedUrl.query.iso);
	 var output;
	 if (parsedUrl.pathname == '/api/parsetime') {
		 output = getRegularTime(time);
	 } else if (parsedUrl.pathname == '/api/unixtime') {
		 output = getUnixTime(time);
	 }
	 response.writeHead(200, { 'Content-Type': 'application/json' });
	 response.write(JSON.stringify(output));
	 response.end();
	 
})
var port = process.argv[2];
server.listen(+port);
