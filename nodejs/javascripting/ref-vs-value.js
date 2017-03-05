function mutate(a){
	a.push(4);
	console.log(a);

	a.push(5);
	a = [5,6,7];
	a.push(8);
	console.log(a);
}

var x = [1,2,3];
mutate(x);

console.log(x);