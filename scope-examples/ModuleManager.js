(function(){
	var ModuleManager = (function(){
		var _modules = {};

		function define(name, deps, impl){
			if(_modules[name]) {
				console.log('module already defined');
			} else {
				for(var i=0, l=deps.length; i<l; i++){
					deps[i] = _modules[deps[i]];
				}
				_modules[name] = impl.apply(impl, deps);
			}
		}

		function require(name) {
			return _modules[name];
		}

		return {
			define : define,
			require : require
		};
	})();

	ModuleManager.define('foo', [], function(){
		return {
			method : function(name) {
				console.log('my name is ' + name);
			}
		};
	});

	ModuleManager.define('bar', ['foo'], function(foo) {
		return {
			method : function(name) {
				console.log('i am from bar');
				foo.method(name);
			}
		};
	});

	ModuleManager.define('bar', ['foo'], function(foo) {
		return {
			method : function(name) {
				console.log('i am from bar2');
				foo.method(name);
			}
		};
	});

	var abc = ModuleManager.require('foo');
	var def = ModuleManager.require('bar');

	abc.method('ANi');
	def.method('IANS');
})();