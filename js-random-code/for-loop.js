// console.log( .3 - .2 == .2-.1 );

(function(){
	var a1 = {};
	var a2 = {};
	var b = {};

	b[a1] = 10;
	b[a2] = 20;

	for(let key in b){
		console.log(b[key]);
	}
}());


(function(){
	for(;0;){
		console.log('here');
	}
})();


for(;true;){{
	console.log(11111);
	break;
}}


(function(){{
	console.log('here too')
}})();


function f(){
	return 1; 
	console.log(1234);
}

console.log(f());
