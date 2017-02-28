var app = angular.module("myApp",['ngRoute']);
app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
    
    $locationProvider.hashPrefix('');

    $routeProvider.when("/Main", {
        templateUrl : "View/Main.htm"
    })
    $routeProvider.when("/Restaurant",{
        templateUrl : "View/Restaurant.htm",
        controller : "RestaurantController"
    })
    $routeProvider.otherwise({
        templateUrl : "View/Main.htm"
    })
}]);