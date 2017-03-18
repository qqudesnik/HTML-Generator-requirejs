define(["jquery"], function(){
		//here is no $.fn.myPlugin
		if(!$.fn.myPlugin){
			console.log('math js has no $.fn.myPlugin');
		}
		
		return {
			execute: function(){}
		}
});