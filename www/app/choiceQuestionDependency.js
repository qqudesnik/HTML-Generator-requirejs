define(["jquery"], function($){
		//you can define $ plugin here
		$.fn.myPlugin = function(){
			
		}
		return {
			execute: function(){				
				console.log('choiceQuestionDependency executed');
			}
		}
});