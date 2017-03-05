'use strict';
function isNull(x){
	if(!x && typeof x === 'object'){
		return true;
	} else {
		return false;
	}
}


console.log(isNull(undefined));
console.log(isNull(23));
console.log(isNull('String'));
console.log(isNull({a: 'prop1'}));
console.log(isNull(null));
console.log(isNull(''));