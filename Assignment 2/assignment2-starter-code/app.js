(function(){
  'use strict';

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);


  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){

    var itemAdder = this;

    itemAdder.buyItems = ShoppingListCheckOffService.getItems(0);
    itemAdder.len = itemAdder.buyItems.length;

    itemAdder.remove = function(index){
        ShoppingListCheckOffService.removeItem(index);

    }


  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){

    var bought = this;
    bought.data = ShoppingListCheckOffService.getItems(1);

    bought.boughtItems = bought.data[0];
    bought.len = bought.data[1];



  }




  function ShoppingListCheckOffService(){
    var service = this;


    var buyListItems = [
      {
        name : "Mangoes",
        quantity : "2Kg"
      },

      {
        name : "Ice Cream",
        quantity : "2 Bricks"
      },

      {
        name : "Milk",
        quantity : "2L"
      },

      {
        name : "Frozen Corns",
        quantity : "2 Kg"
      },

      {
        name : "Subway",
        quantity : "1 FootLong"
      }

    ];

    var boughtListItems = [];

    service.getItems = function(control){
      if (control === 0)
        return buyListItems;
      else if (control === 1)
        return [boughtListItems,boughtListItems.length];

    };

    service.removeItem = function(index){

        var tempItem = buyListItems[index];
        boughtListItems.push(tempItem);
        buyListItems.splice(index,1);

    }


  }


})();
