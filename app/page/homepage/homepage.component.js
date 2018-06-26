(function(){

  const config = {
    templateUrl: '/app/page/homepage/homepage.component.html',
    controller: homepageCtrl
  };

  function homepageCtrl(){
    var ctrl = this;

    ctrl.greet = 'hello homepage';
  };

  angular
    .module('weatherApp')
    .component('homepage', config);
})();