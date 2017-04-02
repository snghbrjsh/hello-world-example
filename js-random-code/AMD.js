/*
*	AMD implementation
*/

var ModuleManager = (function(){
    var _module = {};

    function define(name, deps, impl){
        if(_module[name]) {
            console.log('module already exists');
        } else {
            for(var i=0; i<deps.length; i++){
                deps[i] = _module[deps[i]];
            }
            _module[name] = impl.apply(impl, deps);
        }
    }

    function require(deps, impl){
        for(var i=0; i<deps.length; i++){
            deps[i] = _module[deps[i]];
        }
        impl.apply(impl, deps);
    }

    return {
        define: define,
        require: require
    };
})();

ModuleManager.define('module1', [], function(){
    function calculateIntrest(sum, rate, period){
        return sum*rate*period/100;
    }

    console.log('module 1 impl');

    return {
        calculateIntrest: calculateIntrest
    }
});

ModuleManager.define('module2', ['module1'], function(mod1){
	console.log('module 2 impl');
   	return {
       calculateEMI: function(loanAmount){
           var intrestAmount = mod1.calculateIntrest(loanAmount, 11.49, 5);
           return (loanAmount+intrestAmount)/(5*12);
       }
   }
});

console.log('####################################################');

ModuleManager.require(['module2'], function(mod2){
    var emiValue = mod2.calculateEMI(100000);
    console.log('EMI amount is: ' + emiValue);
});