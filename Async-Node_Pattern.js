var fs = require('fs');

function readFileGetWord(callback) {
    console.log(3);
    fs.readFile('data.json', 'utf8',function (err, fileString) {
        console.log(13);
        if (err) {
            callback(err);
            // if this returned a value where would it go?
            return
        }
        var data = JSON.parse(fileString);
        //this is weird for a callback to return a value, just think about it
        var words = callback(null, data[0]);
        console.log("Value returned from callback inside readFileGetWord:", words);
        console.log(16);

        //where does this string go?
        return "more words";
    });

    console.log(4);

    //it is weird for the "node-pattern of handling async problems" to return something (don't do this) 
    //but I want you to think about this to fully understand async flow of execution
    //and to understand the difference between an async function and a callback
    return "return";
}

function addNumbers(a, b, callback) {
    console.log(6);
    var notANumber = callback(null, a + b);
    console.log("Value returned from callback in addNumbers:", notANumber);
    console.log(8);
    //it is weird for the "node-pattern of handling async problems" to return something (don't do this) 
    //but I want you to think about this to fully understand async flow of execution
    //and to understand the difference between an async function and a callback
    return "dog";
}


function start() {
    var text, number;

    console.log(2)
    text = readFileGetWord(function (err, word) {
        console.log(14);

        if (err) {
            console.log(err);
            // if this returned a value where would it go?
			// it would become the value returned from the callback inside readFileGetWord
            return;
        }

        console.log("Word from file:", word);
        console.log(15);

        //this return is also weird, just want you to think about it
        return "this is weird";
    })

    console.log(5);
    number = addNumbers(2, 3, function (err, sum) {
        if(err){
            console.log(err);
            //if this returned a value where would it go?
			// it would become the value returned from the callback inside addNumbers
            return;
        }
        console.log(7);
        console.log("Sum:", sum);
        //this return is also weird, just want you to think about it
        return "not a number";
    });

    console.log(9);
    console.log("Value returned from addNumbers:", number);
    console.log(10);
    console.log("Value returned from readFileGetWord:", text);
    console.log(11);
}

console.log(1);
start();
console.log(12);
