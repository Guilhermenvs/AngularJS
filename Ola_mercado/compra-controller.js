var app = angular.module("MyApp");

app.controller("CompraController", function ($scope, $location) {
    $scope.products = ["Leite", "Queijo", "Pao"];
        $scope.addItem = function () {

            $scope.errortext = "";
            if (!$scope.addMe) { return; }
            if ($scope.products.indexOf($scope.addMe) == -1) {
                $scope.products.push($scope.addMe);
            } else {
                $scope.errortext = "Item inválido.";
            }
        }
        $scope.removeItem = function (x) {
            $scope.errortext = "";
            $scope.products.splice(x, 1);
        }

        $scope.changeRoute = function(view)
        {
            $location.path(view);
        };
    });