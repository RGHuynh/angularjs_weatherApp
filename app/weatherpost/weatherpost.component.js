(function(){
  var config = {
    templateUrl: '/app/weatherpost/weatherpost.component.html',
    controller: weatherPostCtrl
  }

  function weatherPostCtrl(weatherApiService){
    var ctrl = this;
    ctrl.data = weatherApiService.data;
    ctrl.temp= weatherApiService.data;
  };

  angular
    .module('weatherApp')
    .component('weatherPost', config)
})();