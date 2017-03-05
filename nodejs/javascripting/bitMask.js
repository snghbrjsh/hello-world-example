function createBitMask(){
	var mask=0, 
	flag=0,
	argLength= (arguments.length > 32) ? 32 : arguments.length;

	for(var i=0; i<argLength; i++){
		mask = mask<<1;
		mask = mask | arguments[i];
	}
	return mask.toString(2);
}

function createBitMask2(){
	var mask=0,
	flag=0,
	argLength= (arguments.length > 32) ? 32 : arguments.length;

	for(flag; flag<argLength; mask |= (arguments[flag] << flag++) );
	return mask.toString(2);
}



console.log(createBitMask(true, false));
console.log(createBitMask(false, false, true, true, false));
console.log(createBitMask(true, true, false, true, true, true, false, false, false, true));
console.log(createBitMask(true, false, true, false, true, false, true, false));

console.log(createBitMask2(true, false));
console.log(createBitMask2(false, false, true, true, false));
console.log(createBitMask2(true, true, false, true, true, true, false, false, false, true));
console.log(createBitMask2(true, false, true, false, true, false, true, false));