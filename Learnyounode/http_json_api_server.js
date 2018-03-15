var http = require('http');
var url = require('url');

function getRegularTime(time) {
	console.log(typeof time);
	return {
		hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds()
	}
}
console.log(getRegularTime('2018-03-15T14:19:40.457Z'));

function getUnixTime(time) {
	return {
		unixtime: time.getTime()
	}
}

var server = http.createServer(function(request, response) {
	 var parsedUrl = url.parse(request.url, true);
	 var time = new Date(parsedUrl.query.iso);
	 console.log(typeof time);
	 if (parsedUrl.pathname == '/api/parsetime') {
		 getRegularTime(time);
	 } else if (parsedUrl.pathname == '/api/unixtime') {
		 //time = JSON.stringify(parsedUrl.path);
		 getUnixTime(time);
	 }
	 response.writeHead(200, { 'Content-Type': 'application/json' });
	 response.end();
	 
})
var port = process.argv[2];
server.listen(+port);