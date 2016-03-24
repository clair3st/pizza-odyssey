//Initialise Global variables
//Variables for store locations to make objects containing store data
var ballard, firstHill, sthLakeUnion, intDistrict, ravenna, georgetown;
//Variables for Arrays to use to add to DOM
var openHoursArray, tableHeadings, tableArrayballard, tableArrayFirstHill, tableArrayIntDistrict, tableArraySthLakeUnion, tableArrayGeorgetown, tableArrayRavenna;
//Variables to manipulate DOM
var row, col, peopleTable, firstRow, featureId, featureText;
//Variable to calculate pizza sales to update index.html
var totalPizzaSales;
var count = 0;

// Object constructor for Store location and empty array for hourly data
function StoreLocation(name){
  this.name = name;
  this.hourlyData = [];
}

//Object constructor containing time of day, pizza's sold, pizza's deliveried and drivers needed.
var HourlyData = function(time, minPizza, maxPizza, minDelivery, maxDelivery) {
  this.time = time;
  this.pizzaSold = randomNo(minPizza, maxPizza);
  this.pizzaDelivered = randomNo(minDelivery, maxDelivery);
  this.deliveryDrivers = Math.ceil(this.pizzaDelivered / 3);
  this.deliveryDriversString = deliveryString(this.deliveryDrivers);
};

//method created to push HourlyData to StoreLocation
StoreLocation.prototype.pushHourlyData = function(data){
  this.hourlyData.push(data);
};

//function for random number
function randomNo (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//function for string to output depending on the amount of delivery drivers
function deliveryString (drivers) {
  if (drivers === 0) {
    return 'driver not recommended';
  } else {
    return 'drivers recommended: ' + drivers;
  }
}

//function for datarows in table on html
function generateDataRow(inputArray) {
  row = document.createElement('tr');
  col;
  for (var i = 0; i < inputArray.length; i++){
    col = document.createElement('td');
    col.textContent = inputArray[i];
    row.appendChild(col);
  }
  return row;
}

//function to take in an array of strings and create a table row with tr tags
function generateHeadingRow(inputArray) {
  row = document.createElement('tr');
  col;
  for (var i = 0; i < inputArray.length; i++) {
    col = document.createElement('th');
    col.textContent = inputArray[i];
    row.appendChild(col);
  }
  return row;
}

//function to generate entire table for each restaurant
function createTable(store, arrayContent) {
  peopleTable = document.createElement('table');
  firstRow = generateHeadingRow(tableHeadings);
  peopleTable.appendChild(firstRow);
  for (var i = 0; i < arrayContent.length; i++) {
    row = generateDataRow(arrayContent[i]);
    peopleTable.appendChild(row);
    document.getElementById(store).appendChild(peopleTable);
  }
  document.getElementById(store).appendChild(peopleTable);
}

//Event Listener for New Restaurant Form
function collectPizzaForm(event){

  event.preventDefault();

  var pizzaSaleTable = document.getElementById('pizza-sales-table');
  var pizzaSaleTableHeading = document.getElementById('create-location');
  var parentDiv = pizzaSaleTable.parentNode;

  var restaurant = event.target.restaurant.value;
  console.log('restaurant: ' + restaurant);
  var restaurantTitle = document.createElement('h4');
  console.log('restaurant title: ' + restaurantTitle);
  restaurantTitle.textContent = restaurant;

  var header = generateHeadingRow(tableHeadings);

  var createRestaurant = new StoreLocation(restaurant);
  createRestaurant.pushHourlyData(new HourlyData(event.target.time.value, parseInt(event.target.minPizza.value), parseInt(event.target.maxPizza.value), parseInt(event.target.minDelivery.value), parseInt(event.target.maxDelivery.value)));
  console.log('new object ', createRestaurant);

  var tableArrayNewRestaurant = [createRestaurant.hourlyData[0].time, createRestaurant.hourlyData[0].pizzaSold, createRestaurant.hourlyData[0].pizzaDelivered,
    createRestaurant.hourlyData[0].deliveryDriversString];
  console.log ('array' + createRestaurant.hourlyData[0].time);

  row = generateDataRow(tableArrayNewRestaurant);
  if (count === 0 ) {
    parentDiv.insertBefore(restaurantTitle, pizzaSaleTable);
    pizzaSaleTable.appendChild(header);
  }

  pizzaSaleTable.appendChild(row);
  count += 1;
  console.log(count);
}

//Store data for each time in a variable using the HourlyData object constructor
ballard = new StoreLocation('ballard');
ballard.pushHourlyData(new HourlyData('8:00am', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyData('9:00am', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyData ('10:00am', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyData ('11:00am', 5, 10, 2, 8));
ballard.pushHourlyData(new HourlyData ('12:00pm', 5, 10, 2, 8));
ballard.pushHourlyData(new HourlyData ('1:00pm', 5, 10, 2, 8));
ballard.pushHourlyData(new HourlyData ('2:00pm', 2, 13, 1, 7));
ballard.pushHourlyData(new HourlyData ('3:00pm', 2, 13, 1, 7));
ballard.pushHourlyData(new HourlyData ('4:00pm', 2, 13, 1, 7));
ballard.pushHourlyData(new HourlyData ('5:00pm', 0, 15, 2, 9));
ballard.pushHourlyData(new HourlyData ('6:00pm', 0, 15, 2, 9));
ballard.pushHourlyData(new HourlyData ('7:00pm', 0, 15, 2, 9));
ballard.pushHourlyData(new HourlyData ('8:00pm', 1, 3, 4, 12));
ballard.pushHourlyData(new HourlyData ('9:00pm', 1, 3, 4, 12));
ballard.pushHourlyData(new HourlyData ('10:00pm', 1, 3, 4, 12));
ballard.pushHourlyData(new HourlyData ('11:00pm', 8, 15, 6, 16));
ballard.pushHourlyData(new HourlyData ('12:00am', 8, 15, 6, 16));
ballard.pushHourlyData(new HourlyData ('11:00pm', 8, 15, 6, 16));
console.log('ballard: ', ballard);

firstHill = new StoreLocation('First Hill');
firstHill.pushHourlyData(new HourlyData('8:00am', 1, 3, 1, 7));
firstHill.pushHourlyData(new HourlyData('9:00am', 1, 3, 1, 7));
firstHill.pushHourlyData(new HourlyData ('10:00am', 1, 3, 1, 7));
firstHill.pushHourlyData(new HourlyData ('11:00am', 5, 9, 2, 8));
firstHill.pushHourlyData(new HourlyData ('12:00pm', 5, 9, 2, 8));
firstHill.pushHourlyData(new HourlyData ('1:00pm', 5, 9, 2, 8));
firstHill.pushHourlyData(new HourlyData ('2:00pm', 2, 13, 1, 6));
firstHill.pushHourlyData(new HourlyData ('3:00pm', 2, 13, 1, 6));
firstHill.pushHourlyData(new HourlyData ('4:00pm', 2, 13, 1, 6));
firstHill.pushHourlyData(new HourlyData ('5:00pm', 18, 32, 3, 9));
firstHill.pushHourlyData(new HourlyData ('6:00pm', 18, 32, 3, 9));
firstHill.pushHourlyData(new HourlyData ('7:00pm', 18, 32, 3, 9));
firstHill.pushHourlyData(new HourlyData ('8:00pm', 1, 3, 5, 16));
firstHill.pushHourlyData(new HourlyData ('9:00pm', 1, 3, 5, 16));
firstHill.pushHourlyData(new HourlyData ('10:00pm', 1, 3, 5, 16));
firstHill.pushHourlyData(new HourlyData ('11:00pm', 8, 20, 6, 16));
firstHill.pushHourlyData(new HourlyData ('12:00am', 8, 20, 6, 16));
firstHill.pushHourlyData(new HourlyData ('11:00pm', 8, 20, 6, 16));

intDistrict = new StoreLocation('International District');
intDistrict.pushHourlyData(new HourlyData('8:00am', 0, 4, 0, 4));
intDistrict.pushHourlyData(new HourlyData('9:00am', 0, 4, 0, 4));
intDistrict.pushHourlyData(new HourlyData ('10:00am', 0, 4, 0, 4));
intDistrict.pushHourlyData(new HourlyData ('11:00am', 0, 7, 0, 4));
intDistrict.pushHourlyData(new HourlyData ('12:00pm', 0, 7, 0, 4));
intDistrict.pushHourlyData(new HourlyData ('1:00pm', 0, 7, 0, 4));
intDistrict.pushHourlyData(new HourlyData ('2:00pm', 2, 15, 1, 4));
intDistrict.pushHourlyData(new HourlyData ('3:00pm', 2, 15, 1, 4));
intDistrict.pushHourlyData(new HourlyData ('4:00pm', 2, 15, 1, 4));
intDistrict.pushHourlyData(new HourlyData ('5:00pm', 10, 26, 4, 6));
intDistrict.pushHourlyData(new HourlyData ('6:00pm', 10, 26, 4, 6));
intDistrict.pushHourlyData(new HourlyData ('7:00pm', 10, 26, 4, 6));
intDistrict.pushHourlyData(new HourlyData ('8:00pm', 8, 22, 7, 15));
intDistrict.pushHourlyData(new HourlyData ('9:00pm', 8, 22, 7, 15));
intDistrict.pushHourlyData(new HourlyData ('10:00pm', 8, 22, 7, 15));
intDistrict.pushHourlyData(new HourlyData ('11:00pm', 0, 2, 2, 8));
intDistrict.pushHourlyData(new HourlyData ('12:00am', 0, 2, 2, 8));
intDistrict.pushHourlyData(new HourlyData ('1:00am', 0, 2, 2, 8));

sthLakeUnion = new StoreLocation('South Lake Union');
sthLakeUnion.pushHourlyData(new HourlyData('8:00am', 0, 4, 0, 4));
sthLakeUnion.pushHourlyData(new HourlyData('9:00am', 0, 4, 0, 4));
sthLakeUnion.pushHourlyData(new HourlyData ('10:00am', 0, 4, 0, 4));
sthLakeUnion.pushHourlyData(new HourlyData ('11:00am', 0, 7, 0, 4));
sthLakeUnion.pushHourlyData(new HourlyData ('12:00pm', 0, 7, 0, 4));
sthLakeUnion.pushHourlyData(new HourlyData ('1:00pm', 0, 7, 0, 4));
sthLakeUnion.pushHourlyData(new HourlyData ('2:00pm', 5, 15, 0, 4));
sthLakeUnion.pushHourlyData(new HourlyData ('3:00pm', 5, 15, 0, 4));
sthLakeUnion.pushHourlyData(new HourlyData ('4:00pm', 5, 15, 0, 4));
sthLakeUnion.pushHourlyData(new HourlyData ('5:00pm', 25, 39, 13, 18));
sthLakeUnion.pushHourlyData(new HourlyData ('6:00pm', 25, 39, 13, 18));
sthLakeUnion.pushHourlyData(new HourlyData ('7:00pm', 25, 39, 13, 18));
sthLakeUnion.pushHourlyData(new HourlyData ('8:00pm', 22, 36, 5, 22));
sthLakeUnion.pushHourlyData(new HourlyData ('9:00pm', 22, 36, 5, 22));
sthLakeUnion.pushHourlyData(new HourlyData ('10:00pm', 22, 36, 5, 22));
sthLakeUnion.pushHourlyData(new HourlyData ('11:00pm', 5, 21, 16, 31));
sthLakeUnion.pushHourlyData(new HourlyData ('12:00am', 5, 21, 16, 31));
sthLakeUnion.pushHourlyData(new HourlyData ('1:00am', 5, 21, 16, 31));

georgetown = new StoreLocation('Georgetown');
georgetown.pushHourlyData(new HourlyData('8:00am', 2, 7, 3, 5));
georgetown.pushHourlyData(new HourlyData('9:00am', 2, 7, 3, 5));
georgetown.pushHourlyData(new HourlyData ('10:00am', 2, 7, 3, 5));
georgetown.pushHourlyData(new HourlyData ('11:00am', 3, 8, 3, 9));
georgetown.pushHourlyData(new HourlyData ('12:00pm', 3, 8, 3, 9));
georgetown.pushHourlyData(new HourlyData ('1:00pm', 3, 8, 3, 9));
georgetown.pushHourlyData(new HourlyData ('2:00pm', 1, 5, 1, 4));
georgetown.pushHourlyData(new HourlyData ('3:00pm', 1, 5, 1, 4));
georgetown.pushHourlyData(new HourlyData ('4:00pm', 1, 5, 1, 4));
georgetown.pushHourlyData(new HourlyData ('5:00pm', 5, 13, 2, 4));
georgetown.pushHourlyData(new HourlyData ('6:00pm', 5, 13, 2, 4));
georgetown.pushHourlyData(new HourlyData ('7:00pm', 5, 13, 2, 4));
georgetown.pushHourlyData(new HourlyData ('8:00pm', 22, 41, 15, 42));
georgetown.pushHourlyData(new HourlyData ('9:00pm', 22, 41, 15, 42));
georgetown.pushHourlyData(new HourlyData ('10:00pm', 22, 41, 15, 42));
georgetown.pushHourlyData(new HourlyData ('11:00pm', 15, 20, 6, 21));
georgetown.pushHourlyData(new HourlyData ('12:00am', 15, 20, 6, 21));
georgetown.pushHourlyData(new HourlyData ('1:00am', 15, 20, 6, 21));

ravenna = new StoreLocation('Ravenna');
ravenna.pushHourlyData(new HourlyData('8:00am', 0, 4, 0, 4));
ravenna.pushHourlyData(new HourlyData('9:00am', 0, 4, 0, 4));
ravenna.pushHourlyData(new HourlyData ('10:00am', 0, 4, 0, 4));
ravenna.pushHourlyData(new HourlyData ('11:00am', 0, 7, 0, 4));
ravenna.pushHourlyData(new HourlyData ('12:00pm', 0, 7, 0, 4));
ravenna.pushHourlyData(new HourlyData ('1:00pm', 0, 7, 0, 4));
ravenna.pushHourlyData(new HourlyData ('2:00pm', 2, 15, 1, 4));
ravenna.pushHourlyData(new HourlyData ('3:00pm', 2, 15, 1, 4));
ravenna.pushHourlyData(new HourlyData ('4:00pm', 2, 15, 1, 4));
ravenna.pushHourlyData(new HourlyData ('5:00pm', 6, 9, 5, 18));
ravenna.pushHourlyData(new HourlyData ('6:00pm', 6, 9, 5, 18));
ravenna.pushHourlyData(new HourlyData ('7:00pm', 6, 9, 5, 18));
ravenna.pushHourlyData(new HourlyData ('8:00pm', 4, 8, 2, 5));
ravenna.pushHourlyData(new HourlyData ('9:00pm', 4, 8, 2, 5));
ravenna.pushHourlyData(new HourlyData ('10:00pm', 4, 8, 2, 5));
ravenna.pushHourlyData(new HourlyData ('11:00pm', 2, 4, 3, 11));
ravenna.pushHourlyData(new HourlyData ('12:00am', 2, 4, 3, 11));
ravenna.pushHourlyData(new HourlyData ('1:00am', 2, 4, 3, 11));

//Variables for each time of day is stored in an array.
openHoursArray = ['8:00am','9:00am','10:00am','11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm,', '7:00pm', '8:00pm', '9:00pm', '10:00pm', '11:00pm', '12:00am', '1:00am'];

//Table headings
tableHeadings = ['Time', 'Pizzas Sold', 'Deliveries', 'Delivery Drivers Required'];

//Array of table data for each restaurant
tableArrayballard = [];
for (var i = 0; i < openHoursArray.length; i++) {
  tableArrayballard.push([ballard.hourlyData[i].time, ballard.hourlyData[i].pizzaSold, ballard.hourlyData[i].pizzaDelivered,
  ballard.hourlyData[i].deliveryDriversString]);
}

tableArrayFirstHill = [];
for (var i = 0; i < openHoursArray.length; i++) {
  tableArrayFirstHill.push([firstHill.hourlyData[i].time, firstHill.hourlyData[i].pizzaSold, firstHill.hourlyData[i].pizzaDelivered,
  firstHill.hourlyData[i].deliveryDriversString]);
}
console.log(tableArrayFirstHill);

tableArrayIntDistrict = [];
for (var i = 0; i < openHoursArray.length; i++) {
  tableArrayIntDistrict.push([intDistrict.hourlyData[i].time, intDistrict.hourlyData[i].pizzaSold, intDistrict.hourlyData[i].pizzaDelivered,
  intDistrict.hourlyData[i].deliveryDriversString]);
}

tableArraySthLakeUnion = [];
for (var i = 0; i < openHoursArray.length; i++) {
  tableArraySthLakeUnion.push([sthLakeUnion.hourlyData[i].time, sthLakeUnion.hourlyData[i].pizzaSold, sthLakeUnion.hourlyData[i].pizzaDelivered,
  sthLakeUnion.hourlyData[i].deliveryDriversString]);
}

tableArrayGeorgetown = [];
for (var i = 0; i < openHoursArray.length; i++) {
  tableArrayGeorgetown.push([georgetown.hourlyData[i].time, georgetown.hourlyData[i].pizzaSold, georgetown.hourlyData[i].pizzaDelivered,
  georgetown.hourlyData[i].deliveryDriversString]);
}

tableArrayRavenna = [];
for (var i = 0; i < openHoursArray.length; i++) {
  tableArrayRavenna.push([ravenna.hourlyData[i].time, ravenna.hourlyData[i].pizzaSold, ravenna.hourlyData[i].pizzaDelivered,
  ravenna.hourlyData[i].deliveryDriversString]);
}

  //call the createTable functions to generate tables for each restaurant
if (document.getElementById('sales-data') !== null) {
  createTable('ballard', tableArrayballard);
  createTable('First Hill', tableArrayFirstHill);
  createTable('International District', tableArrayIntDistrict);
  createTable('South Lake Union', tableArraySthLakeUnion);
  createTable('Georgetown', tableArrayGeorgetown);
  createTable('Ravenna', tableArrayRavenna);
}

//calculate the total amount of pizza sales and store in global variable totalPizzaSales.
totalPizzaSales = 0;
for (var i = 0; i < openHoursArray.length; i++) {
  totalPizzaSales += ballard.hourlyData[i].pizzaSold + firstHill.hourlyData[i].pizzaSold, intDistrict.hourlyData[i].pizzaSold + sthLakeUnion.hourlyData[i].pizzaSold + georgetown.hourlyData[i].pizzaSold + ravenna.hourlyData[i].pizzaSold;
};
console.log('total Pizza Sales: ' + totalPizzaSales);

//try print to index.html
if (document.getElementById('feature') !== null) {
  featureId = document.getElementById('feature');
  featureText = document.createElement('p');
  featureText.textContent = totalPizzaSales + ' happy pizza odysseys today!';
  featureId.appendChild(featureText);
}

var createPizzaForm = document.getElementById('pizza-sales-form');
createPizzaForm.addEventListener('submit', collectPizzaForm);
