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

//Objects
const glazing = {
    "Original": 0,
    "Sugar milk": 0,
    "Vanilla milk": 0.50,
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


//function to add a new roll
function addNewRoll(rollType, rollGlazing, packSize, rollPrice) {
  const rollEntry = new Roll(rollType, rollGlazing, packSize, rollPrice);

  cartSet.add(rollEntry);

  return rollEntry;
}


//function to create new html elements for each roll
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


//function that updates html elements with roll data
function updateElement(rollEntry) {
  const rollImageElement = rollEntry.element.querySelector(".imgcart");
  const rollTitleElement = rollEntry.element.querySelector(".subtextTitle");
  const rollGlazeElement = rollEntry.element.querySelector(".subtextGlazing");
  const rollPackElement = rollEntry.element.querySelector(".subtextPack");

  rollImageElement.src = "../assets/products/" + rolls[rollEntry.type].imageFile;
  rollTitleElement.innerText = rollEntry.type + " Cinnamon Roll";
  rollGlazeElement.innerText = rollEntry.glazing;
  rollPackElement.innerText = "Pack Size: " + rollEntry.size;

}


//function that deletes roll object
function deleteRoll(rollEntry) {
  rollEntry.element.remove();
  cartSet.delete(rollEntry);
  updateRollArray(rollEntry);

  saveToLocalStorage();
}

//function that calculates the price for each specific roll 
function calcRollPrice(rollEntry){
  let rollCost = (rollEntry.basePrice + glazing[rollEntry.glazing]) * pack[rollEntry.size];
  rollCost = rollCost.toFixed(2);

  const rollCostElement = rollEntry.element.querySelector(".imgprice");
  rollCostElement.innerText = "$" + rollCost;

  cartPriceArray.push(rollCost);
  calcTotalPrice();
}


//function that updates prices when a roll is deleted from the set
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


//function that calculates the total price for all rolls in the cart
function calcTotalPrice(){
  let priceTotal = document.querySelector(".cartprice");

  let totalCartPrice = 0;
  for(i=0; i<cartPriceArray.length; i++){
      totalCartPrice = totalCartPrice + (parseFloat(cartPriceArray[i]));
  }
  priceTotal.innerText = "$" + totalCartPrice.toFixed(2);
}

//function that takes the local storage, parses it, and updates the DOM and new total price
function retrieveFromLocalStorage() {
  const addedRollString = localStorage.getItem('storedRolls');
  const addedRoll = JSON.parse(addedRollString);
  console.log(addedRoll);

  for (const rollData of addedRoll) {
    const newRoll = addNewRoll(rollData.type, rollData.glazing, rollData.size, rollData.basePrice);
    createElement(newRoll);

    calcRollPrice(newRoll);
  }
}
//function that turns the contents of the set into an array and stores it in local storage
function saveToLocalStorage() {
  const addedRoll = Array.from(cartSet);
  console.log(addedRoll);

  const addedRollString = JSON.stringify(addedRoll);

  localStorage.setItem('storedRolls', addedRollString);
}

retrieveFromLocalStorage();