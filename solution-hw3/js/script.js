let totalPrice = document.querySelector("#addcart");
let newprice;

//Glazing Object
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


//Glazing Dropdown
const glazingOptions = Object.entries(glazing);
const glazeDropdown = document.getElementById("glazingoptions");
for (element of glazingOptions){
  let newOption = document.createElement('option');
  let optionname = document.createTextNode(glazingnames[element[0]]);
  newOption.appendChild(optionname);
  newOption.setAttribute('value', String(element[1])),
  glazeDropdown.appendChild(newOption);
}

//Pack Dropdown
const packOptions = Object.entries(packnames);
// const packValue = Object.entries(pack)
const packDropdown = document.querySelector(".packmenu");

for (element of packOptions){

  let newOption = document.createElement('option');
  let optionname = document.createTextNode(packnames[element[0]]);
  newOption.appendChild(optionname);
  newOption.setAttribute('value', String(element[0]));
  packDropdown.appendChild(newOption);
}

console.log(packDropdown.value);

const basePrice = 2.49;
let glazingPrice = glazing.original;
let packPrice = pack.one;


function glazingChange(element) {
    const priceChange = element.value;
    glazingPrice = parseFloat(priceChange);
    console.log(glazingPrice);

    newPriceCalc();
  }


//TO DO:
  function packChange(element) {
    const priceChange = element.value;
    packPrice = parseFloat(priceChange);
    newPriceCalc();
  }

console.log(parseFloat("3.98888"));
//Calc Price:
function newPriceCalc(){
  newPrice = (basePrice + glazingPrice) * packPrice;
  newPrice = newPrice.toFixed(2);
  addNewPrice();
  console.log(newPrice);
}

//Adds price to HTML file:
function addNewPrice(){
  let newPriceText = "$ " + newPrice;
  totalPrice.textContent = newPriceText;
}