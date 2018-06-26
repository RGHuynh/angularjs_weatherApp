(function(){

  var config = {
    templateUrl: '/app/weatherHeader/weatherHeader.component.html',
    controller: weatherHeaderCtrl
  };

  function weatherHeaderCtrl(){
    var ctrl = this;
    ctrl.header = "AngularJS Weather";
  };

  angular
    .module('weatherApp')
    .component('weatherHeader', config);
})();