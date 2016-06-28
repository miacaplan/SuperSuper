class InventoryService {
    constructor($http, djangoUrl, $route) {
        console.log("inventory service ctor");
        this.djangoUrl = djangoUrl;
        this.$route = $route;
        this.categories = $http.get(djangoUrl.reverse('api:category-list')).then(resp => resp.data);
        this.$http = $http;

    }

    product() {
        return this.$http.get(this.djangoUrl.reverse('api:product-detail', {'pk':this.$route.current.params.id})).then(resp => resp.data);
    }

    category() {
        return this.$http.get(this.djangoUrl.reverse('api:category-detail', {'pk': this.$route.current.params.id})).then(resp => resp.data);
    }
}

angular.module("store").service('inventoryService', InventoryService);
