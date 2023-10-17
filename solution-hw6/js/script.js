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
  original: 0,
  sugarmilk: 0,
  vanillamilk: 0.50,
  doublechoc: 1.50,
}

const glazingnames = {
original: "Original",
sugarmilk: "Sugar milk",
vanillamilk: "Vanilla milk",
doublechoc: "Double Chocolate",
}

const pack = {
one: 1,
three: 3,
six: 5,
twelve: 10,
}

const packnames = {
1: "1",
3: "3",
5: "6",
10: "12",
}

const glazingKey = {
    "Original": 0,
    "Sugar Milk": 0,
    "Vanilla Milk": 0.50,
    "Double Chocolate": 1.50,
}

// const glazingnames = {
//   original: "Original",
//   sugarmilk: "Sugar milk",
//   vanillamilk: "Vanilla milk",
//   doublechoc: "Double Chocolate",
// }

// const pack = {
//   1: 1,
//   3: 3,
//   6: 5,
//   12: 10,
// }

//HW 4 /////////////////

let totalPrice = document.querySelector("#addcart");
let newprice;

//Objects
// const glazing = {
//     original: 0,
//     sugarmilk: 0,
//     vanillamilk: 0.50,
//     doublechoc: 1.50,
// }


// const pack = {
//   one: 1,
//   three: 3,
//   six: 5,
//   twelve: 10,
// }

// const packnames = {
//   1: "1",
//   3: "3",
//   5: "6",
//   10: "12",
// }

//URL Parameters
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollFlavor = params.get('roll');

if(rollFlavor){
  let currentRollTitle = document.querySelector(".titlep");
  let currentRollImg = document.querySelector(".imgdetail");

  currentRollTitle.innerText = rollFlavor + " cinnamon roll";
  currentRollImg.src = "../assets/products/" + rolls[rollFlavor].imageFile;

  //Cost Section:
  const basePrice = rolls[rollFlavor].basePrice;
  totalPrice.innerText = "$ " + basePrice;
  let glazingPrice = glazing.original;
  let packPrice = pack.one;
}

//Glazing Dropdown
const glazingOptions = Object.entries(glazing);
const glazeDropdown = document.getElementById("glazingoptions");

for (element of glazingOptions){
  let newOption = document.createElement('option');
  let optionName = document.createTextNode(glazingnames[element[0]]);
  newOption.appendChild(optionName);
  newOption.setAttribute('value', String(element[1])),
  glazeDropdown.appendChild(newOption);
}



//Pack Dropdown
const packOptions = Object.entries(packnames);
const packDropdown = document.querySelector(".packmenu");

for (element of packOptions){

  let newOption = document.createElement('option');
  let optionName = document.createTextNode(packnames[element[0]]);
  newOption.appendChild(optionName);
  newOption.setAttribute('value', String(element[0]));
  packDropdown.appendChild(newOption);
}


function glazingChange(element) {
    const priceChange = element.value;
    glazingPrice = parseFloat(priceChange);

    newPriceCalc();
  }



  function packChange(element) {
    const priceChange = element.value;
    packPrice = parseFloat(priceChange);

    newPriceCalc();
  }


//Calc Price:
function newPriceCalc(){
  newPrice = (basePrice + glazingPrice) * packPrice;
  newPrice = newPrice.toFixed(2);
  addNewPrice();
}


//Adds price to HTML file:
function addNewPrice(){
  let newPriceText = "$ " + newPrice;
  totalPrice.textContent = newPriceText;
}


//Cart constructor:
let cart = [];

/* This thread in StackOverflow was referenced for how to get the text of the selected dropdown menu item:
https://stackoverflow.com/questions/5913/getting-the-text-from-a-drop-down-box */

function constructRoll(){
  let newRoll = new Roll(rollType, glazingoptions.options[glazingoptions.selectedIndex].text, packDropdown.options[packDropdown.selectedIndex].text, basePrice);
  cart.push(newRoll);

  console.log(cart);
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

    rollImageElement.src = "../assets/products/" + rolls[rollEntry.type].imageFile;
    rollTitleElement.innerText = rollEntry.type + " Cinnamon Roll";
    rollGlazeElement.innerText = rollEntry.glazing;
    rollPackElement.innerText = "Pack Size: " + rollEntry.size;

  }
  


  function deleteRoll(rollEntry) {
    rollEntry.element.remove();
    cartSet.delete(rollEntry);
    updateRollArray(rollEntry);
  }
  
  for (const rollEntry of cartSet) {
    createElement(rollEntry);
    calcRollPrice(rollEntry);
  }



  function calcRollPrice(rollEntry){

    let rollCost = (rollEntry.basePrice + glazingKey[rollEntry.glazing]) * pack[rollEntry.size];
    rollCost = rollCost.toFixed(2);

    const rollCostElement = rollEntry.element.querySelector(".imgprice");
    rollCostElement.innerText = "$" + rollCost;

    cartPriceArray.push(rollCost);
    calcTotalPrice();
  }



  function updateRollArray(rollEntry){
    cartPriceArray = [];
    for (rollEntry of cartSet) {
    let rollCost = (rollEntry.basePrice + glazingKey[rollEntry.glazing]) * pack[rollEntry.size];
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

function saveToLocalStorage(){
  const rollCartArray = Array.from(cartSet);
  console.log(rollCartArray);

  const rollCartArrayString = JSON.stringify(rollCartArray);
  console.log(rollCartArrayString);
}

const rollFour = addNewRoll("Original", "Sugar Milk", 1, 2.49);
