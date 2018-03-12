 var myModule = require('./make_it_modular_filter.js');
 var file = process.argv[2];
 var ending = process.argv[3];
 
  myModule(file,  process.argv[3], function(err, list) {
	if(err) {
		console.log("error");
	}
	else {
		list.forEach((element) => {
			console.log(element);
		});
	}
  });