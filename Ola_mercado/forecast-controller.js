angular.module("MyApp").controller('ForecastController', function ($scope, $resource, cityService,  $sce) {

    $scope.city = cityService.city;

    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast?q=london&appid=976c99d123407d50a81800e4ae049df2", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" } });

    //$scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city });
    $scope.weatherResult = $sce.getTrustedResourceUrl("http://api.openweathermap.org/data/2.5/forecast?q=london&appid=976c99d123407d50a81800e4ae049df2");

    console.log($scope.weatherAPI);
    console.log($scope.weatherResult);
});