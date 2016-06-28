"use strict";
var m = angular.module("store", ["djng.urls", "ngRoute", "dj"]);

m.factory('categories', function CategoriesService($http, djangoUrl) {
    return $http.get(djangoUrl.reverse('api:category-list')).then(resp => resp.data);
});


m.config(function ($routeProvider) {
    $routeProvider.when('/category/', {
        template: '<categories items="$resolve.items"></categories>',
        resolve: {
            items: categories => categories
        }
    });

    $routeProvider.when('/', {
        template: '<categories items="$resolve.items"></categories>',
        resolve: {
            items: categories => categories
        }
    });

    $routeProvider.when('/product/:id/', {
        template: '<product item="$resolve.product"></product>',
        //controller: function CategoryCtrl($http, djangoUrl, $route) {
        //    $http.get(djangoUrl.reverse('api:category-detail', {'pk':$route.current.params.id})).then(resp => this.category = resp.data);
        //},
        resolve: {
            product: function ($http, $route, djangoUrl) {
                //return inventoryById.then(data => data[$route.current.params.id]);
                return $http.get(djangoUrl.reverse('api:product-detail', {'pk':$route.current.params.id})).then(resp => resp.data);
            }
        }
    });

    $routeProvider.when('/category/:id/', {
        template: '<category item="$resolve.category"></category>',
        //controller: function CategoryCtrl($http, djangoUrl, $route) {
        //    $http.get(djangoUrl.reverse('api:category-detail', {'pk':$route.current.params.id})).then(resp => this.category = resp.data);
        //},
        resolve: {
            category: function ($http, $route, djangoUrl) {
                return $http.get(djangoUrl.reverse('api:category-detail', {'pk':$route.current.params.id})).then(resp => resp.data);
            }
        }
    });

});
