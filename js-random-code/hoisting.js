(function(){
	fun1();
	fun2();

	function fun1(){
		console.log('fun1');
	}

	var fun2 = function(){
		console.log('fun2');
	}
})();