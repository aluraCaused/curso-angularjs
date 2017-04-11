angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])
	.config(function($routeProvider, $locationProvider){

		$locationProvider.html5Mode(true);

		$routeProvider.when("/fotos", {
			controller:"FotosController",
			templateUrl:"/partials/principal.html"
		});

		$routeProvider.when("/fotos/new",{
			templateUrl:"/partials/foto.html",
			controller:"FormController"
		});

		$routeProvider.when("/fotos/edit/:fotoId", {
			templateUrl:"/partials/foto.html",
			controller:"FormController"
		})

		$routeProvider.otherwise({redirectTo: '/fotos'});
	})