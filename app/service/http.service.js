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
          data: {city: cityName},
          url: "http://localhost:3000/weather_apis.json"
        }).then(function successfullCallback(response){
            return response;
        })
      }
      
    };
})();