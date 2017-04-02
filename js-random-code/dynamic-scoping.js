if (!Function.prototype.softBind) {
	Function.prototype.softBind = function(obj) {
		var fn = this;
		// capture any curried parameters
		var curried = [].slice.call( arguments, 1 );
		var bound = function() {
			return fn.apply( (!this || this === (window || global)) ? obj : this,
			curried.concat.apply( curried, arguments )
			);
		};
		bound.prototype = Object.create( fn.prototype );
		return bound;
	};
}

function foo(p1,p2) {
	this.val = p1 + p2;
}
// using `null` here because we don't care about
// the `this` hard-binding in this scenario, and
// it will be overridden by the `new` call anyway!
var obj1 = {};
var bar = foo.softBind ( obj1, "p1", "p4" );
var baz = new bar( "p2", "p3" );
baz.val; // p1p2

console.log('baz.val: ' + baz.val);