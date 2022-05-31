var myApp = angular.module("MyModule");

myApp.service('weatherService', function ($http) {
    this.getWeather = function (callback) {
        $http.get('http://api.openweathermap.org/data/2.5/forecast?q=').then(function successCallback(response) {
            callback(response);
        }, function errorCallback(response) {
            console.error('Error: ' + response);
        });
    };
});