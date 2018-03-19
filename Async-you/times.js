var http = require('http');
var async = require('async');

var url = 'http://' + process.argv[2] + ':' + process.argv[3];

async.series({
    one: function (done) {
        async.times(5, function (n, next) {
            var sendData = JSON.stringify({
                'user_id': n + 1
            })
            var opts = {
                hostname: process.argv[2],
                port: process.argv[3],
                path: '/users/create',
                method: 'POST'
            };
            var req = http.request(opts, function (res) {
                res.on('data', function (chunk) {});
                res.on('end', function () {
                    next(null);
                });
            });
            req.on('error', function (err) {
                next(err);
            });
            req.write(sendData);
            req.end();
        }, function (err, data) {
            done(null, data);
        });
    },
    two: function (done) {
        var body = '';
        http.get(url + '/users', function (response) {
            response.on('data', function (chunk) {
                body += chunk;
            });
            response.on('end', function () {
                done(null, body);
            });
            response.on('error', function (err) {
                done(err);
            })
        }).on('error', function (err) {
            done(err);
        });
    }
}, function (err, results) {
    if (err) {
        console.log(err);
    } else {
        console.log(results.two);
    }
});