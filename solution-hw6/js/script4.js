//Detail Page JS

let cart = [];
if (localStorage.getItem('storedRolls')){
  const addedRollString = localStorage.getItem('storedRolls');
  const addedRoll = JSON.parse(addedRollString);
  cart = addedRoll;
}


let totalPrice = document.querySelector("#addcart");
let newprice;

//Objects
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

//URL Parameters
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollFlavor = params.get('roll');


let currentRollTitle = document.querySelector(".titlep");
let currentRollImg = document.querySelector(".imgdetail");

currentRollTitle.innerText = rollFlavor + " cinnamon roll";
currentRollImg.src = "../assets/products/" + rolls[rollFlavor].imageFile;



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


//Cost Section:
const basePrice = rolls[rollFlavor].basePrice;
totalPrice.innerText = "$ " + basePrice;
let glazingPrice = glazing.original;
let packPrice = pack.one;


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

//Roll constructor:

class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
      this.type = rollType;
      this.glazing =  rollGlazing;
      this.size = packSize;
      this.basePrice = basePrice;
  }
}

/* This thread in StackOverflow was referenced for how to get the text of the selected dropdown menu item:
https://stackoverflow.com/questions/5913/getting-the-text-from-a-drop-down-box */

function constructRoll(){
  let newRoll = new Roll(rollFlavor, glazingoptions.options[glazingoptions.selectedIndex].text, packDropdown.options[packDropdown.selectedIndex].text, basePrice);
  cart.push(newRoll);

  saveToLocalStorage();
}


//function that turns the contents of the cart into an array and stores it in local storage
function saveToLocalStorage() {
  const addedRoll = Array.from(cart);
  console.log(addedRoll);

  const addedRollString = JSON.stringify(addedRoll);

  localStorage.setItem("storedRolls", addedRollString);
}


