//Initialise Global variables
//Variables for each time of day is stored in an array.
var openHoursArray = ['8:00am','9:00am','10:00am','11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm,', '7:00pm', '8:00pm', '9:00pm', '10:00pm', '11:00pm', '12:00am', '1:00am'];
//Table headings
var tableHeadings = ['Time', 'Pizzas Sold', 'Deliveries', 'Delivery Drivers Required'];
//Variables to manipulate DOM and used in several functions
var row, col, firstRow;
//Variable to calculate pizza sales to update index.html
var totalPizzaSales = 0;
var pizzaSalesId = document.getElementById('sales-data');
var restaurantTitle = document.createElement('h2');

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
};

//method created to push HourlyData to StoreLocation
StoreLocation.prototype.pushHourlyData = function(data){
  this.hourlyData.push(data);
};

StoreLocation.prototype.arrayHourlyData = function(){
  this.arrayData = [];
  for (var i = 0; i < this.hourlyData.length; i++) {
    this.arrayData.push([this.hourlyData[i].time, this.hourlyData[i].pizzaSold, this.hourlyData[i].pizzaDelivered,
    this.hourlyData[i].deliveryDrivers]);
  }
};

//Method to add entire table for a particular Store Location object
StoreLocation.prototype.createTable = function(objectName) {
  createHeading(objectName);
  for (var i = 0; i < this.arrayData.length; i++) {
    row = generateDataRow(this.arrayData[i]);
    document.getElementById(this.name).appendChild(row);
  }
};

//function for random number
function randomNo (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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

//Function creates the title, table with id and heading row.
function createHeading(storeObject) {
  //select html section by id and add h2 tag with restaurant name
  var pizzaSalesId = document.getElementById('sales-data');
  var restaurantTitle = document.createElement('h2');
  restaurantTitle.textContent = storeObject.name;
  pizzaSalesId.appendChild(restaurantTitle);
  //create table with id of restaurant name and append heading row
  var pizzaSalesTable = document.createElement('table');
  pizzaSalesTable.setAttribute('id', storeObject.name);
  pizzaSalesId.appendChild(pizzaSalesTable);
  firstRow = generateHeadingRow(tableHeadings);
  pizzaSalesTable.appendChild(firstRow);
}

//Event Handler for New Restaurant Form
function collectPizzaForm(event){
  event.preventDefault();
  var restaurant = event.target.restaurant.value;
  var pizzaSaleTable = document.getElementById(restaurant);

  var createRestaurant = new StoreLocation(restaurant);
  createRestaurant.pushHourlyData(new HourlyData(event.target.time.value, parseInt(event.target.minPizza.value), parseInt(event.target.maxPizza.value), parseInt(event.target.minDelivery.value), parseInt(event.target.maxDelivery.value)));
  createRestaurant.arrayHourlyData();

  if (document.getElementById(restaurant)) {
    row = generateDataRow(createRestaurant.arrayData[0]);
  } else {
    createHeading(createRestaurant);
    row = generateDataRow(createRestaurant.arrayData[0]);
    document.getElementById(restaurant).appendChild(row);
  }
}

//Store data for each time in a variable using the HourlyData object constructor
var ballard = new StoreLocation('Ballard');
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
ballard.arrayHourlyData();
console.log('ballard: ', ballard);

var firstHill = new StoreLocation('First Hill');
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
firstHill.arrayHourlyData();

var intDistrict = new StoreLocation('International District');
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
intDistrict.arrayHourlyData();

var sthLakeUnion = new StoreLocation('South Lake Union');
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
sthLakeUnion.arrayHourlyData();

var georgetown = new StoreLocation('Georgetown');
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
georgetown.arrayHourlyData();

var ravenna = new StoreLocation('Ravenna');
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
ravenna.arrayHourlyData();

//call the createTable method to generate tables for each restaurant
if (document.getElementById('sales-data') !== null) {
  ballard.createTable(ballard);
  firstHill.createTable(firstHill);
  intDistrict.createTable(intDistrict);
  sthLakeUnion.createTable(sthLakeUnion);
  georgetown.createTable(georgetown);
  ravenna.createTable(ravenna);
}

//calculate the total amount of pizza sales and store in global variable totalPizzaSales.
for (var i = 0; i < openHoursArray.length; i++) {
  totalPizzaSales += ballard.hourlyData[i].pizzaSold + firstHill.hourlyData[i].pizzaSold, intDistrict.hourlyData[i].pizzaSold + sthLakeUnion.hourlyData[i].pizzaSold + georgetown.hourlyData[i].pizzaSold + ravenna.hourlyData[i].pizzaSold;
};

//render to index.html
if (document.getElementById('feature') !== null) {
  var featureId = document.getElementById('feature');
  var featureText = document.createElement('p');
  featureText.textContent = totalPizzaSales + ' happy pizza odysseys today!';
  featureId.appendChild(featureText);
}

//Event Listener
if (document.getElementById('pizza-sales-form') !== null) {
  var createPizzaForm = document.getElementById('pizza-sales-form');
  createPizzaForm.addEventListener('submit', collectPizzaForm);
}
