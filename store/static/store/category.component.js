angular.module("store").component('category', {
    templateUrl: basePath => basePath + "category.component.html",
    bindings: {
        item: '=',
    },

    controller: function InventoryController(cartService) {
        this.addToCart = product => {
            cartService.addItem(product);
        };
    }
});

