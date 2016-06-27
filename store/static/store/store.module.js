"use strict";
var m = angular.module("store", ["ngRoute", "dj"]);

m.config(function ($routeProvider, basePath) {

    $routeProvider.when('/', {
        template: '<inventory items="$resolve.items"><inventory>',
        resolve: {
            items: inventory => inventory
        }
    });

    $routeProvider.when('/product/:id/', {
        template: '<product item="$resolve.product"><product>',
        resolve: {
            product: function ($route, inventoryById) {
                return inventoryById.then(data => data[$route.current.params.id]);
            }
        }
    });

});
