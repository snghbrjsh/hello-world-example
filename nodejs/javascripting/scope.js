
var a = 1, b = 2, c = 3;

(function() {
	var b = 5, c = 6;
	(function() {
		var b = 8;
		console.log('a: ' + a + ', b: ' + b + ',c: ' + c);
		(function() {
			var a = 7, c = 9;
			(function() {
				var a = 1, c = 8;
			})();
		})();
	})();
})();