function f(){
	if(typeof new.target != 'undefined'){
		throw new TypeError('this is a utility function and not a Constructor function');
	}

	console.log('normal function call should execute this');
}

f();

void function(){
	'use strict';
	var i = 30;
	var i = 40;

	console.log(i);
	function inner(){
		var j= 10, i=j;

		console.log('inner i: ', i+j )
	}

	inner();
}();