(function(){
  var config = {
    templateUrl: '/app/sidebar/sidebar.component.html',
    controller: sidebarCtrl
  }

  function sidebarCtrl(){
    var ctrl = this;
    ctrl.greeting = 'hello sidebar'
  }

  angular
    .module('weatherApp')
    .component('sidebar', config)
})();