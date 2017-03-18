define(["app/choiceQuestionDependency",],  function (choiceQuestionDependency) {
		if($.fn.myPlugin){
				console.log('choiceQuestion.js has $.fn.myPlugin because it was defined in choiceQuestionDependency module');
		}
		
		return {
			execute: function () {
				console.log('choiceQuestion executed');
				choiceQuestionDependency.execute();
				return 'ChoiceQuestion';
			}
		};
});
