angular.module("store").component('categories', {
     templateUrl: basePath => basePath + "categories.component.html",
     bindings: {
         items: '=',
     }
});