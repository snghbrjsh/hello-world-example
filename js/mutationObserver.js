;(function(){
	// select the target node
	var target = document.querySelector('li');
	 
	// create an observer instance
	var observer = new MutationObserver(function(mutations) {
	  mutations.forEach(function(mutation) {
		console.log('Type: '+mutation.type);
		debugger;
	  });    
	});
	 
	// configuration of the observer:
	var config = { attributes: true, childList: true, characterData: true, subTree: true };
	 
	// pass in the target node, as well as the observer options
	observer.observe(target, config);
	 
	// later, you can stop observing
	// observer.disconnect();
	
	$('li').on('click', function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	});
	
	debugger;
})();
