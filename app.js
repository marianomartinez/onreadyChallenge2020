// Onready challange
// Mariano Martinez

// -----------
// DATABASE (hardcoded, could be replaced by an API)

let vehicles = [
  {
    brand: "Peugeot",
    model: "206",
    doors: 4,
    price: 200000.00
  },
  {
    brand: "Honda",
    model: "Titan",
    displacement: 125,
    price: 60000.00
  },
  {
    brand: "Peugeot",
    model: "208",
    doors: 5,
    price: 250000.00
  },
  {
    brand: "Yamaha",
    model: "YBR",
    displacement: 160,
    price: 80500.50
  }
];

// -----------
// METHODS

// Lists items from the vehicles class conditionally depending on their specific attributes. Both bikes and cars inherit the vehicles' class attributes, but also each have specific attributes of their own classes.

function listItems() {
  vehicles.forEach(product => {
    if (product.doors) {console.log(`Marca: ${product.brand} // Modelo: ${product.model} // Puertas: ${product.doors} // Precio: ${currencyFormat.format(product.price)}`)};
    if (product.displacement) {console.log(`Marca: ${product.brand} // Modelo: ${product.model} // Cilindrada: ${product.displacement}cc // Precio: ${currencyFormat.format(product.price)}`)};
  });
};


// Finds most expensive item 

function mostExpensive() {
  let mostExpensive = vehicles.reduce((a, b) => a.price > b.price ? a : b);
  return `Vehículo más caro: ${mostExpensive.brand} ${mostExpensive.model}`;
};


// Finds least expensive item 

function leastExpensive() {
  let leastExpensive = vehicles.reduce((a, b) => a.price < b.price ? a : b);
  return `Vehículo más barato: ${leastExpensive.brand} ${leastExpensive.model}`;
};


// Finds an item matching a letter to a string

function findModelByLetter() {
  let letter = "Y";
  let foundItems = vehicles.filter(product => product.model.includes(letter));
  return (`Vehículo que contiene la letra ${letter}: ${foundItems[0].brand} ${foundItems[0].model} ${currencyFormat.format(foundItems[0].price)}`);
};


// Sorts vehicles by price (descending) and prints to console 

function sortByPrice() {
  let sortedVehicles = vehicles.sort((a, b) => b.price - a.price );
  console.log(`Vehículos ordenados por precio de mayor a menor:`);
  sortedVehicles.forEach(product => console.log(`${product.brand} ${product.model}`));
};


// Prints a reusable divider

function divider() {
  return ("=============================");
};


// Gives currency format to a value

const formatConfig = { style: "currency", currency: "ARS", minimumFractionDigits: 2 };
const currencyFormat = new Intl.NumberFormat("es-AR", formatConfig);


// -----------
// PRINT TO CONSOLE

console.log(listItems());
console.log(divider());
console.log(mostExpensive());
console.log(leastExpensive());
console.log(findModelByLetter());
console.log(divider());
console.log(sortByPrice());