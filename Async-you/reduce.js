var async = require('async');
var http = require('http');

var number = ['one', 'two', 'three'];
var url = process.argv[2];


async.reduce(number, 0, function (memo, item, callback) {
    var body = '';
    http.get(url + '?number=' + item, function (res) {
        res.on('data', function (chunk) {
            body += chunk.toString();
        });
        res.on('end', function () {
            callback(null, memo + parseInt(body, 10));
        });
    }).on('error', function (err) {
        console.error(err);
    });
}, function (err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});