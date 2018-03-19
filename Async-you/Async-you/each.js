var async = require('async');
var http = require('http');

var fileOne = process.argv[2];
var fileTwo = process.argv[3];

async.each([fileOne, fileTwo], function (item, done) {
    var body = '';
    http.get(item, function (response) {
        response.on('data', function (chunk) {
            body += chunk.toString();
        });
        response.on('end', function () {
            done(null, body);
        });
    });
}, function (err) {
    if (err) {
        console.log(err);
    }
})