class InventoryService {
    constructor($http, djangoUrl) {
        console.log("inventory service ctor");
        this.djangoUrl = djangoUrl;
        this.categories = $http.get(djangoUrl.reverse('api:category-list')).then(resp => resp.data);

    }

    //m.factory('inventory', function InventoryService($http, djangoUrl) {
    //    return $http.get(djangoUrl.reverse('api:product-list')).then(resp => resp.data);
    //});

    //m.factory('inventoryById', function InventorByIdService(inventory) {
    //    return inventory.then(indexBy);
    //});

}

angular.module("store").service('inventoryService', InventoryService);
