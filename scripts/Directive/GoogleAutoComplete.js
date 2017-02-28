app.directive('googleplace', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, controller) {
            var options = {
                types: [],
                componentRestrictions: {
                    country : "IN",
                }
            };
            scope.gPlace = new google.maps.places.Autocomplete(element[0], options);
            google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                scope.$apply(function() {
                    controller.$setViewValue(element.val()); 
                    var geoComponents = scope.gPlace.getPlace();
                    var latitude = geoComponents.geometry.location.lat();
                    var longitude = geoComponents.geometry.location.lng();  
                    scope.OnPlacesChanged(latitude,longitude);               
                });
            });
        }
    };
});