//first().then(second).then(console.log);

var firstPromise;
var secondPromise;

firstPromise = first();
secondPromise = firstPromise.then(function (value) {
    return second(value);
});

secondPromise.then(console.log);