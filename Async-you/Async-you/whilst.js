var async = require('async');
var http = require('http');

var url = process.argv[2];

var count = 0;
var word = '';

async.whilst(
    function () {
        return word !== 'meerkat'
    },
    function (callback) {
        http.get(url, function (response) {
            count++;
            var body = '';
            response.on('data', function (chunk) {
                body += chunk.toString();
            });
            response.on('end', function () {
                word = body;
                callback();
            });
        }).on('error', function (err) {
            console.error(err);
        });

    },
    function (err) {
        console.log(count);
    }
);