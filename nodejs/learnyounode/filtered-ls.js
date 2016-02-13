var args = process.argv;
var fs = require('fs');
fs.readdir(args[2], function(err, list){
	if(err){
		console.log('error occured');
	} else {
		// console.log(list, list.length);
		for(var i = 0; i < list.length; i++){
			// console.log(list[i]);
			// console.log(args[3])
			if(list[i].split('.')[1] === args[3]){
				console.log(list[i]);
			}
		}
	}
});