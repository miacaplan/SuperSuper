angular.module("store").component('cart', {
    templateUrl: basePath => basePath + "cart.component.html",
    bindings: {
        items: '=',
    },
    controller: function CartController(cartService) {
        this.cartService = cartService;
    }
});

