(function(){
  angular
    .module('weatherApp')
    .config(['$routeProvider', function($routeProvider){
      $routeProvider
        .when('/', {
          template: '<homepage />'
        })
    }]);
})();