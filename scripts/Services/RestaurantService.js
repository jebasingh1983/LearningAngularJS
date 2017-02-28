app.factory("googlePlaces", function ($http) {
    var apiKey = "AIzaSyAkqZ8fmAV44LSH-4fC43Jb41kgPcCff1I";
    var placesUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+Sydney&key=" + apiKey;
    return {
        getRestaurants : function(latitude,longitude) {
            var restaurantsUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + latitude + "," + longitude + "&radius=500&type=restaurant&key=" + apiKey;
            return $http.get(restaurantsUrl);
        }
    };
});

