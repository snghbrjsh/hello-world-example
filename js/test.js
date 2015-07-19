;(function(window, $){
	var str = 'anything';
	var str2 = new String(str);
	console.log('Primitive and Object (str="anything";var strObj=new String(str);): ' + str + '  ' + str2 + '  ');
	console.log('Equality (===): ' + (str2 === str));
	console.log('Equality (==): ' + (str2 == str));

	var str3 = str;
	console.log('Primitive and Primitive (str="anuthing";str1=str;): ' + str + '  ' + str3 + '  ');
	console.log('Equality (===): ' + (str3 === str));
	console.log('Equality (==): ' + (str3 == str));

	var str4 = 'anything';
	console.log('Primitive and Primitive (str="anuthing";str1="anything";): ' + str + '  ' + str4 + '  ');
	console.log('Equality (===): ' + (str4 === str));
	console.log('Equality (==): ' + (str4 == str));

	var str5 = new String('anything');
	var str6 = new String('anything');
	console.log('Object and Object (var strObj=new String("anything");var strObj2=new String("anything");): ' + str6 + '  ' + str5 + '  ');
	console.log('Equality (===): ' + (str5 === str6));
	console.log('Equality (==): ' + (str5 == str6));
	
})(this, jQuery);