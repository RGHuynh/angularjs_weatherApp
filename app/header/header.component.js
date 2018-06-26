(function(){

  const config = {
    templaterUrl: '/app/header/header.component.html',
    controller: headerCtrl
  };

  function headerCtrl(){
    var ctrl = this;

    ctrl.greet = "hello World";
    
  };
  angular
    .module('weatherApp')
    .component('header', config);
})();