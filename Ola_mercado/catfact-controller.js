angular.module("MyApp").controller("CatfactController", function ($scope, $location, catFactService) {

    var carros = [
        { marca: "Fiat", modelo: "Uno", anoModelo: "2008" },
        { marca: "BMW", modelo: "328i", anoModelo: "1998" },
        { marca: "Hyundai", modelo: "Tucson", anoModelo: "2013" }
    ];

    $scope.carros = carros;
    $scope.carro = {};
    $scope.textAlert = "Operação concluida com sucesso";
    $scope.showAlert = false;
    $scope.classeAlerta = "ui-alert-error";

    $scope.activate = function () {
        console.log($scope.carro);
    }

    $scope.adicionarCarro = function (carro) {
        $scope.carros.push(carro);
        delete $scope.carro;
        $scope.textAlert = "Carro inserido com sucesso";
        $scope.showAlert = true;
        $scope.classeAlerta = "ui-alert-success";
    };

    $scope.apagarCarros = function () {
        $scope.carros = carros.filter(function (carro) {
            if (!carro.selecionado) return carro;
        });
        $scope.textAlert = "Carro apagado com sucesso";
        $scope.showAlert = true;
        $scope.classeAlerta = "ui-alert-error";
    };

    $scope.isCarroSelecionado = function (carros) {
        return !carros.some(function (carro) {
            return carro.selecionado;
        });
    };

    $scope.fecharAlerta = function () {
        $scope.showAlert = false;
    };

    $scope.changeRoute = function (view) {
        $location.path(view);
    };

    catFactService.getCatFact(function (data) {
        $scope.catFactService = data;
    });

    $scope.activate();
});
