define(function (require) {
	var modulesToLoad = window.dependencies;	//window.dependencies was defined in generatorMain.js
	//["app/choiceQuestion", "app/math.js"];

	//load all modules and run it's execute method
	define('temp', modulesToLoad, function(){
		for(var i=0; i<arguments.length; i++)
			arguments[i].execute();
	});
	
	require(["temp"], function(){/*do nothing*/})	
});
