function doMagic(m, x, y){
	var result;
	var fnCopy = m.sum;
	var args = Array.prototype.slice.call(arguments, 1);

	m.sum = function(a, b){
		console.log('args: ', a, b);
		m.sum = fnCopy;
		return m.sum.apply(m.sum, [].slice.call(arguments));
	}
	result = m.sum.apply(m.sum, args);

	return result;
}

var module = {};
module.sum = function sum(a,b){
	return Number(a) + Number(b);
}

module.multi = function multi(a,b){
	return Number(a) * Number(b);
}


console.log(doMagic(module, 12, 15));
// console.log(module.sum(2,3));