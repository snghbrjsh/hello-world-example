/*
* Example-1
*/

var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};
logIt();


/*
* Example-2
*/ 
function foo(){
    return bar();
    var bar = function() {
        return 3;
    };
    var bar = function() {
        return 8;
    };
}
alert(foo());


/*
* Example-3
*/
alert(foo());
function foo(){
    var bar = function() {
        return 3;
    };
    return bar();
    var bar = function() {
        return 8;
    };
}


/*
* Example-4
*/
function foo(){
    var bar = function() {
        return 3;
    };
    return bar();
    var bar = function() {
        return 8;
    };
}
alert(foo());


/*
* Example-5
*/
function foo(){
    function bar() {
        return 3;
    }
    return bar();
    function bar() {
        return 8;
    }
}
alert(foo());


/*
* Example-6
*/
(function(){
    
    var a = 3;
    b = 3;

})();

console.log("a: " + typeof a);
console.log("b: " + typeof b);
