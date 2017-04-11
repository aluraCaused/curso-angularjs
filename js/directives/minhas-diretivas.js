var app = angular.module("minhasDiretivas", []);

app.directive('meuPainel', function(){
	var ddo = {};

	ddo.restrict = "AE";
	ddo.transclude = true;
	ddo.scope = {
		titulo:'@'
	}

	ddo.templateUrl = "js/directives/meu-painel.html"

	return ddo;
});

app.directive('minhasFotos', function(){
	var ddo = {};

	ddo.restrict = "AE";

	ddo.scope = {
		url:"@",
		titulo:"@"
	};

	ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}"/>';
	return ddo;
});

app.directive('meuBotaoPerigo', function(){

	var ddo = {};
	ddo.restrict = "E";

	ddo.scope = {
		nome: "@",
		acao: "&"
	}

	ddo.template = "<button class='btn btn-danger btn-block' ng-click='acao(foto)'>{{nome}}</button>";
	return ddo;
});