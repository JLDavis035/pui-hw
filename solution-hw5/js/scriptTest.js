let cartSet = new Set();

class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = rollPrice;

    this.element = null;
    }
}

let cartPriceArray = [];

const glazing = {
    "Original": 0,
    "Sugar Milk": 0,
    "Vanilla Milk": 0.50,
    "Double Chocolate": 1.50,
}

const glazingnames = {
  original: "Original",
  sugarmilk: "Sugar milk",
  vanillamilk: "Vanilla milk",
  doublechoc: "Double Chocolate",
}

const pack = {
  1: 1,
  3: 3,
  6: 5,
  12: 10,
}

const packnames = {
  1: "1",
  3: "3",
  5: "6",
  10: "12",
}

  function addNewRoll(rollType, rollGlazing, packSize, rollPrice) {
    const rollEntry = new Roll(rollType, rollGlazing, packSize, rollPrice);
  
    cartSet.add(rollEntry);
  
    return rollEntry;
  }
  
  function createElement(rollEntryDisplay) {
    const emptyTemplate = document.querySelector('.rollTemplate');
    const clone = emptyTemplate.content.cloneNode(true);
    

    rollEntryDisplay.element = clone.querySelector('.flexcartrow');
  
    const btnDelete = rollEntryDisplay.element.querySelector('.remove');
    btnDelete.addEventListener('click', () => {
      deleteRoll(rollEntryDisplay);
    });
    

    const rollElement = document.querySelector('.rollContainer');
    rollElement.prepend(rollEntryDisplay.element);
    

    updateElement(rollEntryDisplay);
  }
  
  function updateElement(rollEntry) {
    const rollImageElement = rollEntry.element.querySelector(".imgcart");
    const rollTitleElement = rollEntry.element.querySelector(".subtextTitle");
    const rollGlazeElement = rollEntry.element.querySelector(".subtextGlazing");
    const rollPackElement = rollEntry.element.querySelector(".subtextPack");
    // const rollCostElement = rollEntry.element.querySelector(".imgprice");
    
    // let rollCost = (rollEntry.basePrice + glazing[rollEntry.glazing]) * pack[rollEntry.size];
    // rollCost = rollCost.toFixed(2)
    rollImageElement.src = "../assets/products/" + rolls[rollEntry.type].imageFile;
    rollTitleElement.innerText = rollEntry.type + " Cinnamon Roll";
    rollGlazeElement.innerText = rollEntry.glazing;
    rollPackElement.innerText = "Pack Size: " + rollEntry.size;
    // rollCostElement.innerText = "$" + rollCost;

  }
  
  function deleteRoll(rollEntry) {
    rollEntry.element.remove();
    cartSet.delete(rollEntry);
    updateRollArray(rollEntry);
  }

  const rollOne = addNewRoll("Apple", "Original", 3, 3.49);

  const rollTwo = addNewRoll("Raisin", "Sugar Milk", 3, 2.99);

  const rollThree = addNewRoll("Walnut", "Vanilla Milk", 12, 3.49);

  const rollFour = addNewRoll("Original", "Sugar Milk", 1, 2.49);

  
  
  for (const rollEntry of cartSet) {
    createElement(rollEntry);
    calcRollPrice(rollEntry);
  }

  function calcRollPrice(rollEntry){

    let rollCost = (rollEntry.basePrice + glazing[rollEntry.glazing]) * pack[rollEntry.size];
    rollCost = rollCost.toFixed(2)

    const rollCostElement = rollEntry.element.querySelector(".imgprice");
    rollCostElement.innerText = "$" + rollCost;

    cartPriceArray.push(rollCost)
    calcTotalPrice();
  }

  function updateRollArray(rollEntry){
    cartPriceArray = [];
    for (rollEntry of cartSet) {
    let rollCost = (rollEntry.basePrice + glazing[rollEntry.glazing]) * pack[rollEntry.size];
    rollCost = rollCost.toFixed(2);

    const rollCostElement = rollEntry.element.querySelector(".imgprice");
    rollCostElement.innerText = "$" + rollCost;

    cartPriceArray.push(rollCost);
    }
    calcTotalPrice();
  }


  function calcTotalPrice(){
    let priceTotal = document.querySelector(".cartprice");

    let totalCartPrice = 0;
    for(i=0; i<cartPriceArray.length; i++){
        totalCartPrice = totalCartPrice + (parseFloat(cartPriceArray[i]));
    }
    priceTotal.innerText = "$" + totalCartPrice.toFixed(2);
}




//   function calcTotalPrice(rollEntry){
//   let totalCartPrice = 0;
//   for(const rollCost of cartPriceArray){
//       totalCartPrice = totalCartPrice + (parseFloat(cartPriceArray));
//       console.log(totalCartPrice);
//   }
//   }

//   function calcTotalPrice(){
//     let totalCartPrice = 0;
//     for(const rollCost of cartPriceArray){
//         totalCartPrice = totalCartPrice + (parseFloat(cartPriceArray));
//     }
//     return totalCartPrice;
//   }

  console.log(cartPriceArray);
