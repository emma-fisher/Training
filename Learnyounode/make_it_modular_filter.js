 var fs = require('fs');
 var path = require('path');
 
 module.exports = function (dir, filter, callback) { 
	fs.readdir(dir, function(err, list) {
		if (err) {
			return callback(err);
		}
		else {
			var ending = path.extname(process.argv[3]);
			var matches = [];
			for (var i = 0; i < list.length; i++) {
				if (path.extname(list[i]) === '.' + filter) {
					matches.push(list[i]);
				}
		
			}
			callback(null, matches);
		}
		
	});
 };
 

	
	
	/*var ending = "." + process.argv[3];
		
		list.forEach(function(element) {
			var point = element.lastIndexOf('.');
			var fileType = element.slice(point);
			if (fileType === ending) {
				 return callback(null, list);
			}
		});*/