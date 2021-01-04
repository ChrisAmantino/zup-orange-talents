var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {

  $scope.usuario = new Object();


$scope.cadastrar = function() {
	/*let nome = document.querySelector('#nome')
	let email = document.querySelector('#email')
	let cpf = document.querySelector('#cpf')
	let data = document.querySelector('#data')*/
	
  $http.post("http://localhost:8080/usuario/cadastro", {
    'nome':$scope.nome,
    'email':$scope.email,
    'cpf':$scope.cpf,
    'dataNascimento':$scope.dataNascimento
    
  }).catch(error => {
	  console.log(error)
  })
  
};

});