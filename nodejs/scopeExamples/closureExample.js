
for(var i = 1; i <= 5; i++){
	setTimeout(function log(){
		console.log(i);
	}, i*1000);
}

for(var i = 1; i <= 5; i++){
	(function(){
		var j = i;
		setTimeout(function log(){
			console.log(j);
		}, i*1000);
	})();
}