var http = require('http');
var async = require('async');

var fileOne = process.argv[2];
var fileTwo = process.argv[3];

async.series({
    requestOne: function (done) {
        var body = '';
        http.get(fileOne, function (response) {
            response.on('data', function (chunk) {
                body += chunk.toString();
            });
            response.on('end', function () {
                done(null, body);
            });
        });
    },

    requestTwo: function (done) {
        var body = '';
        http.get(fileTwo, function (response) {
            response.on('data', function (chunk) {
                body += chunk.toString();
            });
            response.on('end', function () {
                done(null, body);
            });
        });
    }
}, function (err, results) {
    console.log(results);
});