app.directive("restaurantHeader", function()
{
    return {
        restrict : "A",
        templateUrl : 'View/RestaurantHeaderTemplate.htm',
        scope : {
            restaurant1 : "="
        }
    }
})