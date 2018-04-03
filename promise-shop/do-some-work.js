var http = require('q-io/http');



function getUserId(url) {
    return http.read(url)
        .then(function (id) {
            return http.read('http://localhost:7001/' + id);
        })
        .then(function (json) {
            console.log(JSON.parse(json));
        })
        .then(null, console.error)
        .done();
}

getUserId('http://localhost:7000');