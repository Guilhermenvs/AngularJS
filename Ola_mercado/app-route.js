var app = angular.module("MyApp",["ngRoute", 'ngResource'])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "Templates/home.html",
                controller: "HomeController"
            })
            .when("/compra", {
                templateUrl: "Templates/compra.html",
                controller: "CompraController"
            })
            .when("/tempo", {
                templateUrl: "Templates/tempo.html",
                controller: "TempoController"
            })
            .when('/forecast', {
                templateUrl: 'Templates/forecast.html',
                controller: 'ForecastController'
            })
            $routeProvider.otherwise({redirectTo: "/home"});
    });