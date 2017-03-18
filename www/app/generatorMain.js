window.define = function(){};	//to avoid errors for old items

var requireScript =  document.createElement('script');
requireScript.src = "lib/require.js";
requireScript.setAttribute("data-main", "app");

$(document).ready(function(){
		var $oldMainjsScript = $("script[src='app/generatorMain.js']");
		var $scripts = $('script');
		//$scripts.remove();
		
		window.define = undefined;
		$('head').prepend(requireScript);
		
		//All scripts after main.js  are dependencies.
		//Some of them will be wrapped into require module in new versions of Static_Content (math.js, choiceQuestion.js etc).
		//Others(3rd party libraries ) will be included into application using require shim feature
		$scripts = $oldMainjsScript.nextAll('script');//$scripts.not($oldMainjsScript).not('[src="lib/jquery.js"]').not('[src="lib/require.js"]');
		window.dependencies = $scripts.toArray().map(function(item){return item.src});	//all dependencies	
})
