"use strict";

function indexBy(data, key='id') {
    const d = {};
    for (let p of data) {
        d[p.id] = p;
    }
    return d;
}

var m = angular.module("store", ["ngRoute", "dj"]);


m.factory('inventory', function InventoryService($http, basePath) {
    return $http.get(basePath + 'inventory.json').then(resp => resp.data);
});

m.factory('inventoryById', function InventorByIdService(inventory) {
    return inventory.then(indexBy);
});


m.config(function ($routeProvider, basePath) {

    //console.log('CONFIG PHASE', $routeProvider);

    $routeProvider.when('/', {
        templateUrl: basePath + 'inventory.html'
    });

    $routeProvider.when('/product/:id/', {
        templateUrl: basePath + 'product.html',
        controller: function ProductCtrl(product) {
            this.product = product;
        },
        controllerAs: '$ctrl',
        resolve: {
            product: function ($route, inventoryById) {
                return inventoryById.then(data => data[$route.current.params.id]);
            }
        }
    });

});


m.controller('StoreCtrl', function StoreCtrl(inventory) {
    this.loaded = false;
    this.loadingMessage = "Loading inventory...";
    inventory.then(data => {
        this.inventory = data;
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
