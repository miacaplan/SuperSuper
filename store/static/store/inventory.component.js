angular.module("store").component('inventory', {
    templateUrl: basePath => basePath + "inventory.component.html",
    bindings: {
        items: '=',
    },
    controller: function InventoryController(cartService) {
        this.addToCart = product => {
            cartService.addItem(product);
        };
    },
});

