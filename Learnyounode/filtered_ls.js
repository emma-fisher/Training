var fs = require('fs');
var file = process.argv[2];

fs.readdir(file, function callback(err, list) {
	var ending = "." + process.argv[3];
	for (var i = 0; i < list.length; i++) {
		var point = list[i].lastIndexOf('.');
		var fileType = list[i].slice(point);
		if (fileType === ending) {
			console.log(list[i]);
		}
		
	}
	
});