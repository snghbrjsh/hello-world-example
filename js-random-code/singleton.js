var Singleton = (function(){
	var instance;

	init = function(){
		function privatemethod(){

		}

		var privateVariabe = 'private variable';

		return {
			publicMethod : function(){
				console.log('public Method');
			}
		}
	}

	return {
		getInstance : function(){
			if(!instance){
				init();
			}
			return instance;
		}
	};
})();