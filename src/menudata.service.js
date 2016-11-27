(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
  .constant("API","https://davids-restaurant.herokuapp.com");


MenuDataService.$inject = ['$http','API']
function MenuDataService($http,API) {
  var service = this;

  service.getAllCategories = function(){
    return $http({
      method: "GET",
      url: (API+"/categories.json")
    });
    

  }// fin de metodo servicio 1

  service.getItemsForCategory = function(categoryShortName){
 
    return $http({
      method: "GET",
      url: (API+"/menu_items.json?category="+categoryShortName.toUpperCase())
    })
  }
}

})();
