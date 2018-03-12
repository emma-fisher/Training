 var mymodule = require('./make_it_modular_filter.js');
 var file = process.argv[2];
 var ending = "." + process.argv[3];
 
  myModule (dir, ending, function callback(err, list) {
	if(err) {
		console.log("error");
	}
	else {
		console.log(data);
	}
  });