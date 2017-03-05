'use strict';



Object.prototype.toString = function(idx){
	idx = idx || 0;
	idx++;

 	var objStr = '{';
	
	for(let k in this){
		objStr += '\n';
		for(let k1=0; k1< idx; k1++){
			objStr += '\t';
		}

		if(typeof this[k] === 'number' || typeof this[k] === 'string' || this[k] == null) {
			objStr += k + ' : ' + this[k] + ',';
		} else if (typeof this[k] === 'object' && this[k] != null){
			objStr += k + ':';
			objStr += this.toString.call(this[k], idx) + ',';
		}
	}

	objStr = objStr.substr(0, objStr.length - 1 );
	objStr += '\n';

	for(let k1=0; k1<idx-1 ; k1++){
		objStr += '\t';
	}
	objStr += '}';

	return objStr;
}

var obj1 = {
	p1: 'prop1',
	p2: 'prop2',
	p3: {
		p31: 'prop31',
		p32: 23,
		'p33': function(){
			for(let key in this) {
				if(this.hasOwnProperty(key)){
					console.log(key + ' : ' + this[key]);	
				}
			}
			return true;
		},
		p34: {
			p341: 'another',
			p342: 1234
		}
	}
};


Object.prototype.deepCopy = function() {
	var copy = {};
	for (var key in this){
		if(this.hasOwnProperty(key)) {
			if(typeof this[key] == 'object') {
				copy[key] = Object.prototype.deepCopy.call(this[key]);
			} else if (typeof this[key] == 'function'){
				copy[key] = this[key].bind(copy);
			} else {
				copy[key] = this[key];
			}	
		}		
	}
	return copy;
}

var obj2 = obj1.deepCopy();

// console.log(obj2);
console.log(obj1.p3.p33());
console.log('########################################################');
console.log(obj2.p3.p33());

console.log('########################################################');
console.log(obj1.p3.p33 == obj2.p3.p33);
console.log('########################################################');
obj1.p3.p33 = function(){
	console.log('implementation changed');
	return false;
};

console.log(obj1.p3.p33());
console.log('########################################################');
console.log(obj2.p3.p33());

