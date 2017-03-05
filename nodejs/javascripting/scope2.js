/*
* prints 5,5,5,5,5 since the varible i is in global scope.
*/
for (var i=0; i<5; i++){
	setTimeout(function(){console.log(i);}, i*1000);
}


/*
*	Prints 0,1,2,3,4 because i is bound to inner IIFE
*/
for (var i=0; i<5; i++){
	(function(i){
		setTimeout( function(){ console.log(i);}, i*1000);
	})(i);
}

/*
*	Prints 0,1,2,3,4 because i is bound to inner IIFE
*/
for (var i=0; i<5; i++){
	setTimeout( (function(i){
		return function(){
			console.log(i);	
		}
	})(i), i*1000);
}

for(var i=0; i<5; i++) {
    setTimeout(function(i) {
        console.log(i);  
    }, i*1000, i);
}

for (var i=0; i<5; i++){
	setTimeout( console.log.bind(console, i), i*1000);
}
