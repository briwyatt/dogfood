"use strict";

console.log("hello catfood");
var Food = (function () {
var privateCatFood = [];


return {
  loadCatFood: function () {
    //create an XHR to load dogfood
    var loader = new XMLHttpRequest();

    loader.addEventListener("load", function() {
      // set the value of the private array
    privateCatFood = JSON.parse(this.responseText).Brands;
    console.log("privateCatFood", privateCatFood);
      //List dogfood in the DOM
    var list1 = document.getElementById("catfood-list1");

    var outputString3 = "";
    for (var i = 0; i < (privateCatFood.length); i++){
      var currentCatFood = privateCatFood[i];

      //Build up the DOM String
      outputString3 += `<th><h1>Cat Food Brand: ${currentCatFood.name}</h1></th><br>`; //prints each brand Chuck Wagon, Purina
      outputString3 += `<tr><h2><u>Breeds:<br></u>${currentCatFood.Breeds[0]}, ${currentCatFood.Breeds[1]}, ${currentCatFood.Breeds[2]}, ${currentCatFood.Breeds[3]}</h></tr>`; //prints each brand Chuck Wagon, Purina
      outputString3 += `<h2>${currentCatFood.types[0].type}</h2></tr>`; //prints all_natural under Chuck Wagon & puppy under Purina
      outputString3 += `<u><h3>${currentCatFood.types[0].volumes[0].name}</h3></u>`; //prints 32oz and 16oz underlined
      outputString3 += `<h6>${currentCatFood.types[0].volumes[0].price}</h6>`; //prints 9.99 8.99
      outputString3 += `<u><h3>${currentCatFood.types[0].volumes[1].name}</h3></u>`; //prints 64oz 24oz
      outputString3 += `<h6>${currentCatFood.types[0].volumes[1].price}</h6>`; //prints 17.99 14.99
      outputString3 += `<h2>${currentCatFood.types[1].type}</h2>`; //prints standard standard
      outputString3 += `<u><h3>${currentCatFood.types[1].volumes[0].name}</h3></u>`; //prints 58oz  58oz
      outputString3 += `<h6>${currentCatFood.types[1].volumes[0].price}</h6>`; //prints 12.99  19.99
      outputString3 += `<u><h3>${currentCatFood.types[1].volumes[1].name}</h3></u>`; //prints underlined 72 oz 72 oz
      outputString3 += `<h6>${currentCatFood.types[1].volumes[1].price}</h6>`; //prints 21.99 24.99
  
    
    var list2 = document.getElementById("catfood-list2");
    var outputString4 = "";
     for (var i = 1; i < privateCatFood.length; i++){
      var currentCatFood = privateCatFood[i];

      //Build up the DOM String
      outputString4 += `<th><h1>Cat Food Brand: ${currentCatFood.name}</h1></th>`; //prints each brand Chuck Wagon, Purina
      outputString4 += `<tr><h2><u>Breeds:<br></u>${currentCatFood.Breeds[0]}, ${currentCatFood.Breeds[1]}, ${currentCatFood.Breeds[2]}, ${currentCatFood.Breeds[3]}</h></tr>`; //prints each brand Chuck Wagon, Purina
      outputString4 += `<h2>${currentCatFood.types[0].type}</h2></tr>`; //prints all_natural under Chuck Wagon & puppy under Purina
      outputString4 += `<u><h3>${currentCatFood.types[0].volumes[0].name}</h3></u>`; //prints 32oz and 16oz underlined
      outputString4 += `<h6>${currentCatFood.types[0].volumes[0].price}</h6>`; //prints 9.99 8.99
      outputString4 += `<u><h3>${currentCatFood.types[0].volumes[1].name}</h3></u>`; //prints 64oz 24oz
      outputString4 += `<h6>${currentCatFood.types[0].volumes[1].price}</h6>`; //prints 17.99 14.99
      outputString4 += `<h3>${currentCatFood.types[1].type}</h3>`; //prints standard standard
      outputString4 += `<u><h3>${currentCatFood.types[1].volumes[0].name}</h3></u>`; //prints 58oz  58oz
      outputString4 += `<h6>${currentCatFood.types[1].volumes[0].price}</h6>`; //prints 12.99  19.99
      outputString4 += `<u><h3>${currentCatFood.types[1].volumes[1].name}</h3></u>`; //prints underlined 72 oz 72 oz
      outputString4 += `<h6>${currentCatFood.types[1].volumes[1].price}</h6>`; //prints 21.99 24.99
    }



  list1.innerHTML = outputString3;
  list2.innerHTML = outputString4;
}

    });
    loader.open("GET", "catfood.json");
    loader.send();    
  }
}
})();

Food.loadCatFood();


