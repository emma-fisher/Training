function all(promise1, promise2) {
    return new Promise(function (fulfill, reject) {
        var counter = 0;
        var values = [];
        promise1.then(function (value) {
            values[0] = value;
            counter++;

            if (counter === 2) {
                fulfill(values);
            }
        });

        promise2.then(function (value) {
            values[1] = value;
            counter++;

            if (counter === 2) {
                fulfill(values);
            }
        })
    })
}

all(getPromise1(), getPromise2()).then(console.log);