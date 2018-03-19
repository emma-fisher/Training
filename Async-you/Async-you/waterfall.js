var http = require('http');
var async = require('async');
var fs = require('fs');

async.waterfall([
    function (done) {
        fs.readFile(process.argv[2], function (err, url) {
            done(null, url.toString());
        });
    },

    function (url, done) {
        var body = '';
        http.get(url, function (response) {
            response.on('data', function (chunk) {
                body += chunk.toString();
            });
            response.on('end', function () {
                done(null, body);
            });
        });
    }
], function (err, result) {
    if (err) {
        return console.error(err);

    }
    console.log(result);
});