"use strict";

angular.module("store").component("main", {
    templateUrl: basePath => basePath + "main.component.html",
    controller: MainCtrl,
});

function MainCtrl(inventoryService) {
    this.loaded = false;
    this.loadingMessage = "Loading...";
    inventoryService.categories.then(data => {
        this.loaded = true;
    }).catch(()=> {
        this.loadingMessage = "Something went terribly wrong. sorry."
    });
    
    this.cartItems = [];

}