angular.module("store").component('cart', {
    templateUrl: basePath => basePath + "cart.component.html",
    bindings: {
        items: '=',
    },
    controller: function CartController() {
        this.total = () => this.items.reduce(
            (prev, current) => prev + current.product.price * current.amount, 0)
    }
});

