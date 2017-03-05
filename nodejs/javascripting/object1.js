// (function daysInThisMonth(){
// 	var now = new Date(),
// 	y = now.getFullYear(),
// 	m = now.getMonth(),
// 	start = new Date(y, m, 1),
// 	end = new Date(y, m+1, 1);

// 	console.log( (end - start)/(1000*60*60*24) );

// 	console.log(m);
// }());



var Obj1 = {
	a1: 32,
	a2: function(){
		cosole.log('nothing');
	}
}

// var x = new Object(Obj1);
// console.log(x);

// var y = new Obj1();  // Throws Error: Obj1 should be a constructor function
// console.log(y);


// var xx = new Object(23);

// console.log(typeof xx);
// for(let k in xx){
// 	console.log(k + ':' + xx[k]);
// }

// console.log(xx);

// var x = function named(){
// 	console.log('mark1');
// 	if(x.counter++ < 5){
// 		console.log('counter: ' + x.counter);
// 		named();
// 	} else {
// 		console.log('mark2');	
// 	}
// }
// x.counter = 0;

// x();


var x = require('mocha');