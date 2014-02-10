angular.module('paxapy')
.config(function($route) {
	$route.
		when('/', {
			controller: 'indexController',
			templateUrl: 'index.html'
		})
})
.controller()