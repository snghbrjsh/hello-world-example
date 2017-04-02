'use strict';

function myFunc(){
	console.log('called');
}
myFunc.staticProp = 123;


Function.prototype.myCall = function(){
	console.log('here the "this" value is a function');
	console.log('myFunc.staticProp: ' + this.staticProp);
	return ++this.staticProp;
}


console.log('either: ' + myFunc.myCall());


