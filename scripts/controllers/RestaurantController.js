app.controller("RestaurantController",
function($scope,$sce,googlePlaces){
   $scope.gPlace;
   $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  };
  $scope.OnPlacesChanged = function(latitude,longitude){
        googlePlaces.getRestaurants(latitude,longitude) 
            .then(function(response){
               $scope.RestaurantList =  response.data.results;
            },function(Error){
                console.log(Error);
            });
   };
});