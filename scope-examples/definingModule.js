var myModule = (function(){
	var modules = {};
	function define(name, deps, impl){
		for(var i = 0; i < deps.length; i++){
			deps[i] = modules[deps[i]];
		}
		modules[name] = impl.apply(impl, deps);
	}
	
	function get(moduleName) {
		return modules[moduleName];
	}
	
	return {
		get : get,
		define : define
	}
})();

console.log('####HERE#####');

myModule.define('bar', [], function(){
	return {
		doSomething : function(name) {
			console.log('How are you, ' + name + '?');
		}
	}
});

myModule.define('foo', ['bar'], function(bar){
	var _constant = 'Brijesh';
	return {
		identify : function() {
			console.log('why? Is it so important?');
			bar.doSomething(_constant);
		}
	}
});

var bar = myModule.get('bar');
var foo = myModule.get('foo');

bar.doSomething('Anonymous');
foo.identify();