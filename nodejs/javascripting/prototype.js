function Parent(){
	this.familyName = 'Singh';
}

Parent.prototype.getFamilyName = function() {
	return this.familyName;
}

function Child(){
	Parent.call(this);
	this.firstName = 'Brijesh';
}

Child.prototype = Parent.prototype;
Child.prototype.constructor = Child;
Parent.prototype.constructor = Parent;

Child.prototype.getFirstName = function(){
	return this.firstName;
}

var p = new Parent();
var c = new Child();

console.log(p.getFamilyName());
console.log(c.getFirstName() + ' ' + p.getFamilyName());

// console.log(p instanceof Object);
// console.log(c instanceof Parent);

console.log(Child.prototype.constructor === Child);
console.log(Parent.prototype.constructor === Child);

console.log(Child.prototype.constructor === Parent);
console.log(Parent.prototype.constructor === Parent);

console.log(Object.getPrototypeOf(p))
console.log(Object.getPrototypeOf(c))
