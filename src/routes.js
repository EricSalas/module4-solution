(function(){
	'use strict';

	angular.module('MenuApp')
	.config(RoutesConfig);


	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl:'templates/home.html'
  }) //fin state

  
  .state('categories', {
    url: '/categories',
  templateUrl: 'templates/categories.template.html',
   controller: 'CategoriesController as ctrl',
   resolve:{
    result:['MenuDataService', function(MenuDataService){
      return MenuDataService.getAllCategories();
    }]
   }
}) //fin state

.state('itemDetail',{
  url: '/item-detail/{short_name}',
  templateUrl:'templates/itemdetail.template.html',
 controller: 'ItemDetailController as ctrl',
  resolve:{
    result:['$stateParams','MenuDataService',function($stateParams, MenuDataService){
      return MenuDataService.getItemsForCategory($stateParams.short_name);
    }]
  }

}) //fin state
;
}

})();