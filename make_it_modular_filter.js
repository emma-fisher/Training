 var fs = require('fs');
 var path = require('path');
 
 module.exports = function (dir, filter, callback) { 
	fs.readdir(dir, function callback(err, list) {
		if (err) {
			return callback(err);
		}
		else {
			var ending = "." + process.argv[3];
			for (var i = 0; i < list.length; i++) {
				var point = list[i].lastIndexOf('.');
				var fileType = list[i].slice(point);
				if (fileType === ending) {
					return callback(null, file);
				}
		
			}
		}
	
	});
 };