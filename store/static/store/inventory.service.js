(function () {
    "use strict";

    let m = angular.module("store");

    function indexBy(data, key = 'id') {
        const d = {};
        for (let p of data) {
            d[p.id] = p;
        }
        return d;
    }

    m.factory('inventory', function InventoryService($http, apiPaths) {
        return $http.get(apiPaths.product_list).then(resp => resp.data);
    });

    m.factory('inventoryById', function InventorByIdService(inventory) {
        return inventory.then(indexBy);
    });

})();
