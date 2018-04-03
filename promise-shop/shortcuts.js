var promise = new Promise.resolve('HELLO');

var promise2 = new Promise.reject(new Error('HOLA'));

var promise3 = new Promise(function (fulfill, reject) {
    reject(new Error('REJECTION'));
});

promise3.catch(function (err) {
    console.log('OOPS');
    console.log(err.message);
});