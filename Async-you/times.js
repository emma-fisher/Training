var http = require('http');
var async = require('async');

var url = 'http://' + process.argv[2] + ':' + process.argv[3];


async.series({
    one: function (done) {
        async.times(5, function (n, next) {
            var sendData = JSON.stringify({
                'user_id': n
            })
            var opts = {
                hostname: process.argv[2],
                port: process.argv[3],
                path: '/users/create',
                method: 'POST'
            };
            var body = '';
            var req = http.request(opts, function (res) {
                res.on('data', function (chunk) {
                    body += chunk.toString();
                });
                // res.on('end', function () {
                //     return done(null, body);
                // });
            });
            req.write(sendData);
            req.end();
            n++;
        })
    },
    two: function (done) {
        var body = '';
        http.get(url + '/users', function (response) {
            response.on('data', function (chunk) {
                body += chunk.toString();
            });
            response.on('end', function () {
                done(null, body);
            });
        });
    }
}, function (err, results) {
    if (err) {
        console.log(err);
    }
    console.log(results.two);
});