var http = require('q-io/http');



function fetchJSON(url) {
    return http.read(url)
        .then(function (json) {
            console.log(JSON.parse(json));
        })
        .then(null, console.error)
        .done();
}

fetchJSON('http://localhost:1337');