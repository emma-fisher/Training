var http = require('http');
var async = require('async');
var fs = require('fs');

async.waterfall([ readUrl, getUrl ], function(err, result) {
	console.log(result);
});


function readUrl(done) {
	fs.readFile(process.argv[2], function(err, url) {
		done(null, url.toString());
	});
}


function getUrl(url, done) {
	var body = '';
	http.get(url, function(res){
        res.on('data', function(chunk){
         body += chunk;
        });
        res.on('end', function(){
			done(null, body);
        });
    });
}

