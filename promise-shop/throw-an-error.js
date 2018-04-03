function parsePromised(json) {
    return new Promise(function (fulfill, reject) {
        var error;
        try {
            fulfill(JSON.parse(json));
        } catch (error) {
            reject(error);
        }
    });
}

parsePromised(process.argv[2]).then(null, function (error) {
    console.log(error.message)
});