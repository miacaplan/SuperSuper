"use strict";
var m = angular.module("store", ["djng.urls", "ngRoute", "dj"]);

m.factory('categories', function CategoriesService($http, djangoUrl) {
    return $http.get(djangoUrl.reverse('api:category-list')).then(resp => resp.data);
});


m.config(function ($routeProvider) {
    $routeProvider.when('/category/', {
        template: '<categories items="$resolve.items"></categories>',
        resolve: {
            items: categories => categories
        }
    });

    $routeProvider.when('/', {
        template: '<categories items="$resolve.items"></categories>',
        resolve: {
            items: categories => categories
        }
    });

    $routeProvider.when('/product/:id/', {
        template: '<product item="$resolve.product"></product>',
        //controller: function CategoryCtrl($http, djangoUrl, $route) {
        //    $http.get(djangoUrl.reverse('api:category-detail', {'pk':$route.current.params.id})).then(resp => this.category = resp.data);
        //},
        resolve: {
            product: function ($http, $route, djangoUrl) {
                //return inventoryById.then(data => data[$route.current.params.id]);
                return $http.get(djangoUrl.reverse('api:product-detail', {'pk':$route.current.params.id})).then(resp => resp.data);
            }
        }
    });

    $routeProvider.when('/category/:id/', {
        template: '<category item="$resolve.category"></category>',
        //controller: function CategoryCtrl($http, djangoUrl, $route) {
        //    $http.get(djangoUrl.reverse('api:category-detail', {'pk':$route.current.params.id})).then(resp => this.category = resp.data);
        //},
        resolve: {
            category: function ($http, $route, djangoUrl) {
                return $http.get(djangoUrl.reverse('api:category-detail', {'pk':$route.current.params.id})).then(resp => resp.data);
            }
        }
    });

});
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
"use strict";

angular.module("store").component("main", {
    templateUrl: basePath => basePath + "main.component.html",
    controller: MainCtrl,
});

function MainCtrl(categories) {
    this.loaded = false;
    this.loadingMessage = "Loading...";
    categories.then(data => {
        this.loaded = true;
    }).catch(()=> {
        this.loadingMessage = "Something went terribly wrong. sorry."
    });
    
    this.cartItems = [];

}"use strict";
var m = angular.module("store", ["djng.urls", "ngRoute", "dj"]);

m.factory('categories', function CategoriesService($http, djangoUrl) {
    return $http.get(djangoUrl.reverse('api:category-list')).then(resp => resp.data);
});


m.config(function ($routeProvider) {
    $routeProvider.when('/category/', {
        template: '<categories items="$resolve.items"></categories>',
        resolve: {
            items: categories => categories
        }
    });

    $routeProvider.when('/', {
        template: '<categories items="$resolve.items"></categories>',
        resolve: {
            items: categories => categories
        }
    });

    $routeProvider.when('/product/:id/', {
        template: '<product item="$resolve.product"></product>',
        //controller: function CategoryCtrl($http, djangoUrl, $route) {
        //    $http.get(djangoUrl.reverse('api:category-detail', {'pk':$route.current.params.id})).then(resp => this.category = resp.data);
        //},
        resolve: {
            product: function ($http, $route, djangoUrl) {
                //return inventoryById.then(data => data[$route.current.params.id]);
                return $http.get(djangoUrl.reverse('api:product-detail', {'pk':$route.current.params.id})).then(resp => resp.data);
            }
        }
    });

    $routeProvider.when('/category/:id/', {
        template: '<category item="$resolve.category"></category>',
        //controller: function CategoryCtrl($http, djangoUrl, $route) {
        //    $http.get(djangoUrl.reverse('api:category-detail', {'pk':$route.current.params.id})).then(resp => this.category = resp.data);
        //},
        resolve: {
            category: function ($http, $route, djangoUrl) {
                return $http.get(djangoUrl.reverse('api:category-detail', {'pk':$route.current.params.id})).then(resp => resp.data);
            }
        }
    });

});
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
"use strict";

angular.module("store").component("main", {
    templateUrl: basePath => basePath + "main.component.html",
    controller: MainCtrl,
});

function MainCtrl(categories) {
    this.loaded = false;
    this.loadingMessage = "Loading...";
    categories.then(data => {
        this.loaded = true;
    }).catch(()=> {
        this.loadingMessage = "Something went terribly wrong. sorry."
    });
    
    this.cartItems = [];

}"use strict";
var m = angular.module("store", ["djng.urls", "ngRoute", "dj"]);

m.factory('categories', function CategoriesService($http, djangoUrl) {
    return $http.get(djangoUrl.reverse('api:category-list')).then(resp => resp.data);
});


m.config(function ($routeProvider) {
    $routeProvider.when('/category/', {
        template: '<categories items="$resolve.items"></categories>',
        resolve: {
            items: categories => categories
        }
    });

    $routeProvider.when('/', {
        template: '<categories items="$resolve.items"></categories>',
        resolve: {
            items: categories => categories
        }
    });

    $routeProvider.when('/product/:id/', {
        template: '<product item="$resolve.product"></product>',
        //controller: function CategoryCtrl($http, djangoUrl, $route) {
        //    $http.get(djangoUrl.reverse('api:category-detail', {'pk':$route.current.params.id})).then(resp => this.category = resp.data);
        //},
        resolve: {
            product: function ($http, $route, djangoUrl) {
                //return inventoryById.then(data => data[$route.current.params.id]);
                return $http.get(djangoUrl.reverse('api:product-detail', {'pk':$route.current.params.id})).then(resp => resp.data);
            }
        }
    });

    $routeProvider.when('/category/:id/', {
        template: '<category item="$resolve.category"></category>',
        //controller: function CategoryCtrl($http, djangoUrl, $route) {
        //    $http.get(djangoUrl.reverse('api:category-detail', {'pk':$route.current.params.id})).then(resp => this.category = resp.data);
        //},
        resolve: {
            category: function ($http, $route, djangoUrl) {
                return $http.get(djangoUrl.reverse('api:category-detail', {'pk':$route.current.params.id})).then(resp => resp.data);
            }
        }
    });

});
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
"use strict";
var m = angular.module("store", ["djng.urls", "ngRoute", "dj"]);

m.factory('categories', function CategoriesService($http, djangoUrl) {
    return $http.get(djangoUrl.reverse('api:category-list')).then(resp => resp.data);
});


m.config(function ($routeProvider) {
    $routeProvider.when('/category/', {
        template: '<categories items="$resolve.items"></categories>',
        resolve: {
            items: categories => categories
        }
    });

    $routeProvider.when('/', {
        template: '<categories items="$resolve.items"></categories>',
        resolve: {
            items: categories => categories
        }
    });

    $routeProvider.when('/product/:id/', {
        template: '<product item="$resolve.product"></product>',
        //controller: function CategoryCtrl($http, djangoUrl, $route) {
        //    $http.get(djangoUrl.reverse('api:category-detail', {'pk':$route.current.params.id})).then(resp => this.category = resp.data);
        //},
        resolve: {
            product: function ($http, $route, djangoUrl) {
                //return inventoryById.then(data => data[$route.current.params.id]);
                return $http.get(djangoUrl.reverse('api:product-detail', {'pk':$route.current.params.id})).then(resp => resp.data);
            }
        }
    });

    $routeProvider.when('/category/:id/', {
        template: '<category item="$resolve.category"></category>',
        //controller: function CategoryCtrl($http, djangoUrl, $route) {
        //    $http.get(djangoUrl.reverse('api:category-detail', {'pk':$route.current.params.id})).then(resp => this.category = resp.data);
        //},
        resolve: {
            category: function ($http, $route, djangoUrl) {
                return $http.get(djangoUrl.reverse('api:category-detail', {'pk':$route.current.params.id})).then(resp => resp.data);
            }
        }
    });

});
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
"use strict";

angular.module("store").component("main", {
    templateUrl: basePath => basePath + "main.component.html",
    controller: MainCtrl,
});

function MainCtrl(categories) {
    this.loaded = false;
    this.loadingMessage = "Loading...";
    categories.then(data => {
        this.loaded = true;
    }).catch(()=> {
        this.loadingMessage = "Something went terribly wrong. sorry."
    });
    
    this.cartItems = [];

}angular.module("store").component('veryNicePanel', {
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">{{$ctrl.title}}</h3>
            </div>
            <div class="panel-body">
                <p>
                   {{$ctrl.content}}
                </p>
            </div>
        </div>
    `,
    bindings: {
        title: '=',
        content: '=',
    }
});
angular.module("store").component('categories', {
     templateUrl: basePath => basePath + "categories.component.html",
     bindings: {
         items: '=',
     }
});angular.module("store").component('product', {
    templateUrl: basePath => { console.log(basePath + "product.component.html") ; return basePath + "product.component.html"; },
    bindings: {
        item: '=',
    }
});

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

"use strict";
var m = angular.module("store", ["djng.urls", "ngRoute", "dj"]);

m.factory('categories', function CategoriesService($http, djangoUrl) {
    return $http.get(djangoUrl.reverse('api:category-list')).then(resp => resp.data);
});


m.config(function ($routeProvider) {
    $routeProvider.when('/category/', {
        template: '<categories items="$resolve.items"></categories>',
        resolve: {
            items: categories => categories
        }
    });

    $routeProvider.when('/', {
        template: '<categories items="$resolve.items"></categories>',
        resolve: {
            items: categories => categories
        }
    });

    $routeProvider.when('/product/:id/', {
        template: '<product item="$resolve.product"></product>',
        //controller: function CategoryCtrl($http, djangoUrl, $route) {
        //    $http.get(djangoUrl.reverse('api:category-detail', {'pk':$route.current.params.id})).then(resp => this.category = resp.data);
        //},
        resolve: {
            product: function ($http, $route, djangoUrl) {
                //return inventoryById.then(data => data[$route.current.params.id]);
                return $http.get(djangoUrl.reverse('api:product-detail', {'pk':$route.current.params.id})).then(resp => resp.data);
            }
        }
    });

    $routeProvider.when('/category/:id/', {
        template: '<category item="$resolve.category"></category>',
        //controller: function CategoryCtrl($http, djangoUrl, $route) {
        //    $http.get(djangoUrl.reverse('api:category-detail', {'pk':$route.current.params.id})).then(resp => this.category = resp.data);
        //},
        resolve: {
            category: function ($http, $route, djangoUrl) {
                return $http.get(djangoUrl.reverse('api:category-detail', {'pk':$route.current.params.id})).then(resp => resp.data);
            }
        }
    });

});
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
"use strict";

angular.module("store").component("main", {
    templateUrl: basePath => basePath + "main.component.html",
    controller: MainCtrl,
});

function MainCtrl(categories) {
    this.loaded = false;
    this.loadingMessage = "Loading...";
    categories.then(data => {
        this.loaded = true;
    }).catch(()=> {
        this.loadingMessage = "Something went terribly wrong. sorry."
    });
    
    this.cartItems = [];

}angular.module("store").component('veryNicePanel', {
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">{{$ctrl.title}}</h3>
            </div>
            <div class="panel-body">
                <p>
                   {{$ctrl.content}}
                </p>
            </div>
        </div>
    `,
    bindings: {
        title: '=',
        content: '=',
    }
});
angular.module("store").component('categories', {
     templateUrl: basePath => basePath + "categories.component.html",
     bindings: {
         items: '=',
     }
});angular.module("store").component('product', {
    templateUrl: basePath => { console.log(basePath + "product.component.html") ; return basePath + "product.component.html"; },
    bindings: {
        item: '=',
    }
});

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

angular.module("store").component('cart', {
    templateUrl: basePath => basePath + "cart.component.html",
    bindings: {
        items: '=',
    },
    controller: function CartController(cartService) {
        this.cartService = cartService;
    }
});

