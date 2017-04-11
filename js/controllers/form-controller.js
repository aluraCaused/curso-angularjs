angular.module("alurapic").controller("FormController", function($scope, $http, $routeParams){
	$scope.foto= {};
	$scope.mensagem = '';

	if($routeParams.fotoId){
		$http.get("/v1/fotos/"+$routeParams.fotoId)
		.success(function(retorno){
			$scope.foto = retorno;
		})
		.error(function(){
			$scope.mensagem = "Não foi possível abrir a foto";
		});
	}

	$scope.submeter = function(){
		if($scope.formulario.$valid){
			if($routeParams.fotoId){
				$http.put("/v1/fotos/"+$routeParams.fotoId, $scope.foto)
				.success(function(){
					$scope.mensagem = "Foto "+$scope.foto.titulo+" alterada com sucesso";
				})
				.error(function(){
					$scope.mensagem = "Erro ao alterar a foto";
				})
			}else{
				$http.post("/v1/fotos", $scope.foto)
				.success(function() {
					$scope.mensagem = "Foto adicionada com sucesso";
				})
				.error(function(){
					$scope.mensagem = "Erro ao adicionar foto"
				})
			}
		}
	}
})