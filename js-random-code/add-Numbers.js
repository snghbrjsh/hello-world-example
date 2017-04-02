// f(add)(4)(3) = 7
// f(mul)(4)(3) = 12


// console.log(f(add)(4)(3))
// console.log(f(mul)(4)(3))

// console.log(typeof add);

function f(s){
	function add(x){
		return function(y){
			return x + y;
		}

	};
	function mul(x){
		return function(y){
			return x*y;
		}
	};

	switch(s){
		case 'add': {
			return add;
		}
		case 'mul' : {
			return mul;
		}
	}

	return s;
}