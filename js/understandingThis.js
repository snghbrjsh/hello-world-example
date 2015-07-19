;(function myPlugin(){
	'use strict';
		// var x = function f1(i){
		// console.log('f1: '+i);
		// i = i-1;
		// if(i > 0){
			// f1(i);
		// }
		
		// f1 = 30;
		// console.log('typeof f1: '+typeof f1);
		// console.log(f1);
	// };
	
	// function f1(){
		// var a = 23;
		
		// var x = function f2(b){
			// return a + b;
		// }
		
		// return x;
	// }
	
	// var z = f1()(1);
	// console.log(z);
	
	var arr = [1,8,1,8,-7, -7,2];
	
	for(var i = 0; i < arr.length; i++){
		console.log('@@ :'+Math.abs(arr[i]));
		console.log('## :'+arr[Math.abs(arr[i])]);
		if(arr[Math.abs(arr[i])] > 0){
			arr[Math.abs(arr[i])] = - arr[Math.abs(arr[i])];
		} else {
			console.log('@@@: '+Math.abs(arr[i]));
		}
	}
	
})();