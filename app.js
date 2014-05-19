(function(){
var app = angular.module('store', [ ]);
  app.controller('StoreController', function(){
    this.products = gems; //product is a property of this controller
  });

  var gems = [
    {
      name: 'Ruby',
      price: 5.00,
      description: 'real red, real shiny',
      canPurchase: true,
    },
    {
      name: "Topaz",
      price: 3.75,
      description: "not as cool as the Ruby gem",
      canPurchase: true,
    }
  ];
})();
