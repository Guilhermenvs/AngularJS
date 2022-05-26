angular.module("MyApp").controller('TempoController', function($scope, cityService, $location) {
    
        $scope.city = cityService.city;
        
        $scope.$watch('city', function() {
           cityService.city = $scope.city; 
        });

        $scope.changeRouter = function (view) {
            $location.path(view);
        };
        
    });