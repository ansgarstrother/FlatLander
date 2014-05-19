(function(){
var app = angular.module('store', [ ]);
  app.controller('StoreController', function(){
    this.products = gems; //product is a property of this controller
  });

  var gems = [
    {
      name: 'Aquamarine',
      price: 5.00,
      description: 'Very Aqua-ish',
      canPurchase: true,
      images: [
        {
          full: 'images/aquamarine.png'
        }
      ]
    },
    {
      name: "Citrine",
      price: 3.75,
      description: "It's like orange, but better",
      canPurchase: true,
      images: [
        {
          full: 'images/citrine.png'
        }
      ]
    }
  ];
})();
