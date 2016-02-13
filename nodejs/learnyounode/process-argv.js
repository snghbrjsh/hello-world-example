// console.log(process.argv);
var s = 0;
var args = process.argv.slice(2);
for(var i=0; i < args.length; i++){
	s = s + +args[i];
}

console.log(s);