(function(){
  angular
    .module('weatherApp')
    .factory('weatherPostService', weatherPostService);

    function weatherPostService(weatherApiService) {
      var weatherTempData = [];

      var service = {
        data: weatherApiService.data,
        getWeatherTempMin: getWeatherTempMin,
        getWeatherTempMax: getWeatherTempMax,
        getCurrentLocation: getCurrentLocation,
        getCurrentTemp: getCurrentTemp
      };

      return service

      ////

      function getCurrentTemp() {
        return weatherTempData.temp;
      }
      function getCurrentLocation() {
        return weatherApiService.data[0].data.name;
      }

      function getWeatherTempData() {
        if(weatherApiService.data.length > 0) {
          return weatherTempData = weatherApiService.data[0].data.main; 
        }
      }

      function getWeatherTempMin() {
        getWeatherTempData();
        return weatherTempData.temp_min;
      }

      function getWeatherTempMax() {
        getWeatherTempData();
        return weatherTempData.temp_max;
      }
    }

})();