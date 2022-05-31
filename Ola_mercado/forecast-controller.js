angular.module("MyApp")
    .controller('ForecastController', function ($scope, $resource, cityService) {

        $scope.city = cityService.city;

        var url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + $scope.city + '&appid=976c99d123407d50a81800e4ae049df2';

        $resource(url).get(function (data) {
            $scope.weatherResult = data;
            console.log(data);
        }, function (data) {
            console.log('erro');
        });

        $scope.convertToFahrenheit = function (degK) {

            return Math.round((1.8 * (degK - 273)) + 32);

        };

        $scope.convertToDate = function (dt) {

            return new Date(dt * 1000);

        };
    });