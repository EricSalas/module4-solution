(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['result'];
function CategoriesController(result) {
	var ctrl = this;
	ctrl.items = result.data;

}

})();
