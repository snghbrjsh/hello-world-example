Function.prototype.call = function(){
	var thisObj = arguments[0],
		arglist = [];

		for(let k=1; k<arguments.length; k++){
			arglist[k-1] = arguments[k];
		}

	var another = this.bind(thisObj, arglist);
	another();
}


function test(){
	console.log('print: ' + this.prop1 );
}

test.call({prop1: 'prop1234'})