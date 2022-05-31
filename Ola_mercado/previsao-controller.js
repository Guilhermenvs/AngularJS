angular.module("MyApp")
    .controller('PrevisaoController', function ($scope, cityService) {

        cityService.getWeather(function (data) {
            $scope.cityService = data;
        });
    });