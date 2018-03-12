
	var fs = require('fs');
	var file = process.argv[2];
 
	fs.readFile(file, function callback(err, data) {
		if(err) {
			return error;
		}
		var str = data.toString();
		var endlines = str.split('\n');
		var l = endlines.length - 1;
		console.log(l);
	});