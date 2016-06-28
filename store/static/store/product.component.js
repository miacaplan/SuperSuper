angular.module("store").component('product', {
    templateUrl: basePath => { console.log(basePath + "product.component.html") ; return basePath + "product.component.html"; },
    bindings: {
        item: '=',
    }
});

