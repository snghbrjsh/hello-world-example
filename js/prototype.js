
;(function(){
	function Foo(who){
	this.me = who;
	}

	function Bar(who){
		Foo.call(this, who);
	}


	var a1 = Object.create(Foo);

	var a2  = Object.create(Foo.prototype);

	function f1(){}
	f1.prototype = Foo;
	
	var x = new f1();
	debugger;
	
})();
