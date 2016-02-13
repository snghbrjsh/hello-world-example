var args = process.argv;
var fs = require('fs');
fs.readFile(args[2], function(err, data){
	if(err){
		console.log('error occured');
	} else {
		var count = data.toString().split('\n').length;
		// var count = buffer.split('\n').length;
		// console.log(buffer, args[2]);
		console.log(count-1);
	}
});