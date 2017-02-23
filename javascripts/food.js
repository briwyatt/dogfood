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
    var list = document.getElementById("dogfood-list");
    var outputString = "";
    for (var i = 0; i < privateDogFood.length; i++){
      var currentDogFood = privateDogFood[i];

      //Build up the DOM String
      outputString += `<h1>${currentDogFood.name}</h1>`; //prints each brand Chuck Wagon, Purina
      outputString += `<h2>${currentDogFood.types[0].type}</h2>`; //prints all_natural under Chuck Wagon & puppy under Purina
      outputString += `<u><h3>${currentDogFood.types[0].volumes[0].name}</h3></u>`; 
      outputString += `<h6>${currentDogFood.types[0].volumes[0].price}</h6>`;
      outputString += `<u><h3>${currentDogFood.types[0].volumes[1].name}</h3></u>`; 
      outputString += `<h6>${currentDogFood.types[0].volumes[1].price}</h6>`;
      outputString += `<h2>${currentDogFood.types[1].type}</h2>`;
      outputString += `<u><h3>${currentDogFood.types[1].volumes[0].name}</h3></u>`;
      outputString += `<h6>${currentDogFood.types[1].volumes[0].price}</h6>`;
      outputString += `<u><h3>${currentDogFood.types[1].volumes[1].name}</h3></u>`; 
      outputString += `<h6>${currentDogFood.types[1].volumes[1].price}</h6>`;


    }

  list.innerHTML = outputString;
    });
    loader.open("GET", "dogfood.json");
    loader.send();    
  }
}
})();

Food.loadDogFood();