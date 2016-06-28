class CartService {
    constructor() {
        // console.log("cart created");
        this.items = [];
    }

    addItem(product) {
        for (let p of this.items) {
            if (p.product.id === product.id) {
                p.amount++;
                return;
            }
        }
        this.items.push(
            {product: product, amount: 1}
        );
        return this;
    };

    removeItem(item) {
        var i = this.items.indexOf(item);
        if (i > -1) {
            this.items.splice(i, 1);
        }
        return this;
    };

    total() {
        return this.items.reduce(
            (prev, current) => prev + current.product.price * current.amount, 0)
    }


}

angular.module("store").service('cartService', CartService);
