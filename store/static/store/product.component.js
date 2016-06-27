angular.module("store").component('product', {
    templateUrl: basePath => basePath + "product.component.html",
    bindings: {
        item: '=',
    }
});

