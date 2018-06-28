(function(){
  var config = {
    templateUrl: '/app/weatherpost/weatherpost.component.html',
    controller: weatherPostCtrl
  }

  function weatherPostCtrl(weatherPostService){
    var ctrl = this;
    ctrl.data = weatherPostService.data;
    ctrl.tempMin = weatherPostService.getWeatherTempMin;
    ctrl.tempMax = weatherPostService.getWeatherTempMax;
    ctrl.currentLocation = weatherPostService.getCurrentLocation;
    ctrl.currentTemp = weatherPostService.getCurrentTemp;
  };

  angular
    .module('weatherApp')
    .component('weatherPost', config)
})();