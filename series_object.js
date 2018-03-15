var async = require('async');

async.series({
	one: function(done){
		var body = '';
		http.get(url, function(res){
			res.on('data', function(chunk){
				body += chunk;
			});
			res.on('end', function(){
				done(null, body);
			});
		});
	},
	two: function(done) {
		
	}
}, function(err, reults) {
	console.log(results);
});