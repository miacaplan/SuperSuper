angular.module("store").component('cart', {
    templateUrl: "/static/store/cart.component.html",  // TODO: how to inject to component?
    bindings: {
        items: '=',
    },
    controller: function CartController() {
        this.total = () =>  this.items.reduce(
            (prev, current) => prev + current.product.price * current.amount, 0)
    }
});

