angular.module('alurapic').controller("FotosController", function($scope, $http){
	$scope.fotos = []
	$scope.filtro = "";
	$scope.mensagem = "";

	$http.get("/v1/fotos")
	.success(function(retorno){
		
		$scope.fotos = retorno
	})
	.catch(function(erro){
		console.log(erro)
	})

	$scope.remover = function(foto){
		$http.delete("/v1/fotos/"+foto._id)
		.success(function(){
			var indice = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indice, 1);
			$scope.mensagem = 'Foto '+foto.titulo+' foi apagada com sucesso';
		})
		.error(function(){
			$scope.mensagem = 'Erro ao apagar foto';
		})
	}
})