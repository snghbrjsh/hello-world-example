// var obj1 = {
// 	p1 : 'property1',
// 	p2 : {
// 		p21: 'second level property',
// 		p22: function(){
// 			console.log('p21: ' + this.p21)
// 		}
// 	},
// 	p3 : 'base Property' 
// }

// var obj2 = {
// 	p21: 'obj2 property',
// 	p22: 12345,
// 	p23: {
// 		p21: 'obj2 second level property'
// 	}
// }

// obj1.__proto__ = Object.create(obj2);

// Object.setPrototypeOf(obj1, obj2)

// obj1.p2.p22();
// obj1.p2.p22.call(obj1);

// function func(){

// 	a = b = 10;

// 	var obj = {
// 		a : 2, 
// 		b : 3,
// 		c : this.a + this.b
// 	};

// 	console.log(obj);	
// }
// func();


// var foo = {
//    a: 5,
//    b: 6,
//    init: function() {
//        this.c = this.a + this.b;
//        return this;
//    }
// }.init();


console.log(foo());
function foo(){
    var bar = function() {
        return 3;
    };
    return bar();
    var bar = function() {
        return 8;
    };
}