var promise = new Promise(function (fulfill, reject) {
    return setTimeout(function () {
        fulfill('FULFILLED!');
    }, 300);
});

promise.then(console.log);