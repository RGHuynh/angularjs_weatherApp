(function(){
  angular
    .module('weatherApp')
    .factory('weatherApiService', weatherApiService)

    function weatherApiService($http){
      var service = {
        getWeather: getWeather,
        data: []
      };

      return service;

      function getWeather(cityName){
        return $http({
          method: "GET",
          url: "http://api.openweathermap.org/data/2.5/weather?q="+ cityName + "&APPID=bfa7398f10a823c9eb5d78005f24717d"
        }).then(function successfullCallback(response){
          return response;
        })
      }
      
    };
})();