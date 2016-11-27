(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

ItemDetailController.$inject = ['result'];
function ItemDetailController(result){
	var ctrl = this;
	ctrl.items = result.data.menu_items;
	ctrl.categoryName = result.data.category.name;
	ctrl.size = result.data.menu_items.length
	
}

})();
