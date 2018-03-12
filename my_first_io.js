 var fs = require('fs');
 
 var file = fs.readFileSync(process.argv[2]).toString();
 
 var endlines = file.split('\n');
  
 console.log(endlines.length - 1);