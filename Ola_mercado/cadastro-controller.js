var app = angular.module("MyApp");

app.controller("CadastroController", function ($scope, $location) {
    $scope.app = "Cadastro";
    $scope.contatos = [
        {nome: "Pedro", telefone: "99998888"},
    ];
    $scope.operadoras = [
        {nome: "Oi", codigo: 14, categoria: "Celular"},
        {nome: "Vivo", codigo: 15, categoria: "Celular"},
        {nome: "Tim", codigo: 41, categoria: "Celular"},
    ];
    $scope.adicionarContato = function (contato) {
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
    };
    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });
    };
    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };
    $scope.changeRoute = function(view)
        {
            $location.path(view);
        };
});