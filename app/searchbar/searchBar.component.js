(function(){
  var config = {
    templateUrl: '/app/searchbar/searchBar.component.html',
    controller: searchBarCtrl
  }

  function searchBarCtrl(){
    var ctrl = this;
    ctrl.greeting = 'hello searchBar'
  };

  angular
    .module('weatherApp')
    .component('searchBar', config);
})();