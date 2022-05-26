var app = angular.module("MyApp")

app.controller("HomeController", function ($scope, $location) {
        $scope.message = "Pagina Inicial";
        $scope.changeRouter = function(view)
        {
            $location.path(view);
        };
    });