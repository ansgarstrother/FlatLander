(function(){
var app = angular.module('store', [ ]);
  app.controller('StoreController', function(){
    this.product = gem; //product is a property of this controller
  });

  var gem = {
    name: 'Ruby',
    price: 5.00,
    description: 'real red, real shiny',
  }
})();
