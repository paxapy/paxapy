angular.module('paxapy', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/index.html'
    })
    .when('/cv', {
        templateUrl: 'templates/cv.html'
     })
    .when('/something', {
        templateUrl: 'templates/something.html'
    })
}])

.directive('active', ['$location', function($location) {
    return {
        restrict: 'A',
        scope: {
            active: '@'
        },
        link: function(scope, element) {
            scope.location = $location;
            scope.$watch('location.path()', function(path){
                element.toggleClass('active', scope.active == path)
            })
        }
    }
}])
