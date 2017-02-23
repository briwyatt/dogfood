"use strict";

console.log("hello petfood");
var Food = (function () {
var privateDogFood = [];


return {
  loadDogFood: function () {
    //create an XHR to load dogfood
    var loader = new XMLHttpRequest();

    loader.addEventListener("load", function() {
      // set the value of the private array
    privateDogFood = JSON.parse(this.responseText).dog_brands;
    console.log("privateDogFood", privateDogFood);
      //List dogfood in the DOM
    var list1 = document.getElementById("dogfood-list1");
     var list2 = document.getElementById("dogfood-list2");

    var outputString = "";
    var outputString2 = "";
    for (var i = 0; i < (privateDogFood.length-1); i++){
      var currentDogFood = privateDogFood[i];

      //Build up the DOM String
      outputString += `<h1>${currentDogFood.name}</h1></th>`; //prints each brand Chuck Wagon, Purina
      outputString += `<h2>${currentDogFood.types[0].type}</h2></tr>`; //prints all_natural under Chuck Wagon & puppy under Purina
      outputString += `<u><h3>${currentDogFood.types[0].volumes[0].name}</h3></u>`; //prints 32oz and 16oz underlined
      outputString += `<h6>${currentDogFood.types[0].volumes[0].price}</h6>`; //prints 9.99 8.99
      outputString += `<u><h3>${currentDogFood.types[0].volumes[1].name}</h3></u>`; //prints 64oz 24oz
      outputString += `<h6>${currentDogFood.types[0].volumes[1].price}</h6>`; //prints 17.99 14.99
      outputString += `<h2>${currentDogFood.types[1].type}</h2>`; //prints standard standard
      outputString += `<u><h3>${currentDogFood.types[1].volumes[0].name}</h3></u>`; //prints 58oz  58oz
      outputString += `<h6>${currentDogFood.types[1].volumes[0].price}</h6>`; //prints 12.99  19.99
      outputString += `<u><h3>${currentDogFood.types[1].volumes[1].name}</h3></u>`; //prints underlined 72 oz 72 oz
      outputString += `<h6>${currentDogFood.types[1].volumes[1].price}</h6>`; //prints 21.99 24.99
    }
    
    var list2 = document.getElementById("dogfood-list2");
    var outputString2 = "";
     for (var i = 1; i < privateDogFood.length; i++){
      var currentDogFood = privateDogFood[i];

      //Build up the DOM String
      outputString2 += `<h1>${currentDogFood.name}</h1></th>`; //prints each brand Chuck Wagon, Purina
      outputString2 += `<h2>${currentDogFood.types[0].type}</h2></tr>`; //prints all_natural under Chuck Wagon & puppy under Purina
      outputString2 += `<u><h3>${currentDogFood.types[0].volumes[0].name}</h3></u>`; //prints 32oz and 16oz underlined
      outputString2 += `<h6>${currentDogFood.types[0].volumes[0].price}</h6>`; //prints 9.99 8.99
      outputString2 += `<u><h3>${currentDogFood.types[0].volumes[1].name}</h3></u>`; //prints 64oz 24oz
      outputString2 += `<h6>${currentDogFood.types[0].volumes[1].price}</h6>`; //prints 17.99 14.99
      outputString2 += `<h2>${currentDogFood.types[1].type}</h2>`; //prints standard standard
      outputString2 += `<u><h3>${currentDogFood.types[1].volumes[0].name}</h3></u>`; //prints 58oz  58oz
      outputString2 += `<h6>${currentDogFood.types[1].volumes[0].price}</h6>`; //prints 12.99  19.99
      outputString2 += `<u><h3>${currentDogFood.types[1].volumes[1].name}</h3></u>`; //prints underlined 72 oz 72 oz
      outputString2 += `<h6>${currentDogFood.types[1].volumes[1].price}</h6>`; //prints 21.99 24.99
    }



  list1.innerHTML = outputString;
  list2.innerHTML = outputString2;

    });
    loader.open("GET", "dogfood.json");
    loader.send();    
  }
}
})();

Food.loadDogFood();


