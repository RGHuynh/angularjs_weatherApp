(function(){
  var config = {
    templateUrl: '/app/searchbar/searchBar.component.html',
    controller: searchBarCtrl
  }

  function searchBarCtrl(weatherApiService){
    var ctrl = this;
    ctrl.cityInput = '';
    ctrl.getWeather = getWeather
    
    function getWeather(cityInput){
      weatherApiService.getWeather(cityInput).then(function successfulCallBack(response){
        console.log(response);
      });
    } 
  };

  angular
    .module('weatherApp')
    .component('searchBar', config);
})();