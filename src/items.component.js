(function(){
	
	angular.module('MenuApp')
	.component('itemsList',{
		templateUrl:'templates/itemdetaillist.template.html',
		bindings:{
			items:'<'
		}
	});


})();