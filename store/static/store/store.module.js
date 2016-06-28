"use strict";
var m = angular.module("store", ["djng.urls", "ngRoute", "dj"]);

//m.factory('categories', function CategoriesService($http, djangoUrl) {
//    return $http.get(djangoUrl.reverse('api:category-list')).then(resp => resp.data);
//});


m.config(function ($routeProvider) {
    $routeProvider.when('/category/', {
        template: '<categories items="$resolve.items"></categories>',
        resolve: {
            items: inventoryService => inventoryService.categories
        }
    });

    $routeProvider.when('/', {
        template: '<categories items="$resolve.items"></categories>',
        resolve: {
            items: inventoryService => inventoryService.categories
        }
    });

    $routeProvider.when('/product/:id/', {
        template: '<product item="$resolve.product"></product>',
        resolve: {
            product: inventoryService => inventoryService.product()
        }
    });

    $routeProvider.when('/category/:id/', {
        template: '<category item="$resolve.category"></category>',
        resolve: {
            category: inventoryService => inventoryService.category()
        }
    });

});
