/*
*  When using an immediately-invoked function expression, void can be used to force the 
*  function keyword to be treated as an expression instead of a declaration.
*/

// void function iife() {
//     var bar = function () {};
//     var baz = function () {};
//     var foo = function () {
//         bar();
//         baz();
//      };
//     var biz = function () {};

//     foo();
//     biz();

//     console.log('here');
// }();


// function iife2(){
// 	console.log('anything');
// }();


/**
* applyf(add)(4)(5) = 9;
* applyf(mul)(4)(5) = 20
*/

function add(a, b){
    return a+b;
}

function mul(a, b){
    return a*b;
}

function applyf(operation){

    return function(x){
        return function(y){
            return operation(x, y);
        }
    }
}


console.log( applyf(add)(4)(5) );
console.log( applyf(mul)(4)(5) );