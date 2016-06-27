"use strict";

function indexBy(data) {
    const d = {};
    for (let p of data) {
        d[p.id] = p;
    }
    return d;
}

var m = angular.module("store", ["djng.urls", "ngRoute", "dj"]);


m.factory('inventory', function InventoryService($http, djangoUrl) {
    return $http.get(djangoUrl.reverse('api:product-list')).then(resp => resp.data);
});

m.factory('categories', function CategoriesService($http, djangoUrl) {
    return $http.get(djangoUrl.reverse('api:category-list')).then(resp => resp.data);
});

//m.factory('inventoryById', function InventorByIdService(inventory) {
//    return inventory.then(indexBy(data.products));
//});
//
//m.factory('categoriesById', function CategoriesByIdService(inventory) {
//    return inventory.then(data => MapByCategory(data));
//});
//
//m.factory('categories', function CategoriesService(categoriesById) {
//    return categoriesById.then(data => CategorySummaries(data));
//});

m.config(function ($routeProvider, basePath) {

    $routeProvider.when('/', {
        templateUrl: basePath + 'categories.html'
    });

    $routeProvider.when('/category/', {
        templateUrl: basePath + 'categories.html'
    });

    $routeProvider.when('/product/:id/', {
        templateUrl: basePath + 'product.html',
        controller: function ProductCtrl($http, djangoUrl, $route) {
            $http.get(djangoUrl.reverse('api:product-detail', {'pk':$route.current.params.id})).then(resp => this.product = resp.data);
        },
        controllerAs: '$ctrl'
        //resolve: {
        //    product: function ($route, inventoryById) {
        //        return inventoryById.then(data => data[$route.current.params.id]);
        //    }
        //}
    });

    $routeProvider.when('/category/:id/', {
        templateUrl: basePath + 'inventory.html',
        controller: function CategoryCtrl($http, djangoUrl, $route) {
            $http.get(djangoUrl.reverse('api:category-detail', {'pk':$route.current.params.id})).then(resp => this.category = resp.data);
        },
        controllerAs: '$ctrl'
        //resolve: {
        //    category: function ($route, categoriesById) {
        //        return categoriesById.then(data => data[$route.current.params.id]);
        //    }
        //}
    });

});

m.controller('StoreCtrl', function StoreCtrl(categories) {
    this.loaded = false;
    this.loadingMessage = "Loading inventory...";
    categories.then(data => {
        this.categories = data;
        this.loaded = true;
    }).catch(()=> {
        this.loadingMessage = "Something went terribly wrong. sorry."
    });

    this.cartItems = [];

    this.addToCart = product => {
        for (let p of this.cartItems) {
            if (p.product.id === product.id) {
                p.amount++;
                return;
            }
        }
        this.cartItems.push(
            {product: product, amount: 1}
        );
    };

});
