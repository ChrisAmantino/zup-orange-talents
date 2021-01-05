var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {

  $scope.usuario = new Object();


$scope.cadastrar = function() {
	let nome = document.querySelector('#nome')
	let email = document.querySelector('#email')
	let cpf = document.querySelector('#cpf')
	let data = document.querySelector('#dataNascimento')
	
	if(nome.value == '' || email.value == '' || cpf.value == '' || data.value == ''){
		Swal.fire('Ops!', 'Preencha todos os campos!','warning')
	} else {
  $http.post("http://localhost:8080/usuario/cadastro", {
    'nome':$scope.nome,
    'email':$scope.email,
    'cpf':$scope.cpf,
    'dataNascimento':$scope.dataNascimento
    
  }).then(resp => {
	  Swal.fire('Deu tudo certo!', 'Usuário cadastrado com sucesso!','success')
  }).catch(error => {
		Swal.fire('Houve um problema!', 'Usuário já cadastrado! Verifique se seu email ou CPF já foram cadastrados.','error')
  })}
  
};

});