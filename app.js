var totalPizzaSales;

//function for random number
function randomNo (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Object constructor for Store location and empty array for hourly data
function StoreLocation(name){
  this.name = name;
  this.hourlyData = [];
}

//function for string to output depending on the amount of delivery drivers
function deliveryString (drivers) {
  if (drivers === 0) {
    return 'driver not recommended';
  } else {
    return 'drivers recommended: ' + drivers;
  }
}

//Object containing time of day, pizza's sold, pizza's deliveried and drivers needed.
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

//Store data for each time in a variable using the HourlyData object constructor
var ballard = new StoreLocation('ballard');
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
console.log(ballard);

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

//Variables for each time of day is stored in an array.
var openHoursArray = ['8:00am','9:00am','10:00am','11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm,', '7:00pm', '8:00pm', '9:00pm', '10:00pm', '11:00pm', '12:00am', '1:00am'];

//Table headings
var tableHeadings = ['Time', 'Pizzas Sold', 'Deliveries', 'Delivery Drivers Required'];

//Array of table data for each restaurant
var tableArrayballard = [];
for (var i = 0; i < openHoursArray.length; i++) {
  tableArrayballard.push([ballard.hourlyData[i].time, ballard.hourlyData[i].pizzaSold, ballard.hourlyData[i].pizzaDelivered,
  ballard.hourlyData[i].deliveryDriversString]);
}

var tableArrayFirstHill = [];
for (var i = 0; i < openHoursArray.length; i++) {
  tableArrayFirstHill.push([firstHill.hourlyData[i].time, firstHill.hourlyData[i].pizzaSold, firstHill.hourlyData[i].pizzaDelivered,
  firstHill.hourlyData[i].deliveryDriversString]);
}
console.log(tableArrayFirstHill);

var tableArrayIntDistrict = [];
for (var i = 0; i < openHoursArray.length; i++) {
  tableArrayIntDistrict.push([intDistrict.hourlyData[i].time, intDistrict.hourlyData[i].pizzaSold, intDistrict.hourlyData[i].pizzaDelivered,
  intDistrict.hourlyData[i].deliveryDriversString]);
}

var tableArraySthLakeUnion = [];
for (var i = 0; i < openHoursArray.length; i++) {
  tableArraySthLakeUnion.push([sthLakeUnion.hourlyData[i].time, sthLakeUnion.hourlyData[i].pizzaSold, sthLakeUnion.hourlyData[i].pizzaDelivered,
  sthLakeUnion.hourlyData[i].deliveryDriversString]);
}

var tableArrayGeorgetown = [];
for (var i = 0; i < openHoursArray.length; i++) {
  tableArrayGeorgetown.push([georgetown.hourlyData[i].time, georgetown.hourlyData[i].pizzaSold, georgetown.hourlyData[i].pizzaDelivered,
  georgetown.hourlyData[i].deliveryDriversString]);
}

var tableArrayRavenna = [];
for (var i = 0; i < openHoursArray.length; i++) {
  tableArrayRavenna.push([ravenna.hourlyData[i].time, ravenna.hourlyData[i].pizzaSold, ravenna.hourlyData[i].pizzaDelivered,
  ravenna.hourlyData[i].deliveryDriversString]);
}

//function for datarow
function generateDataRow(inputArray) {
  var row = document.createElement('tr');
  var col;
  for (var i = 0; i < inputArray.length; i++){
    col = document.createElement('td');
    col.textContent = inputArray[i];
    row.appendChild(col);
  }
  return row;
}

//take in an array of strings and create a table row with tr tags
function generateHeadingRow(inputArray) {
  var row = document.createElement('tr');
  var col;
  for (var i = 0; i < inputArray.length; i++) {
    col = document.createElement('th');
    col.textContent = inputArray[i];
    row.appendChild(col);
  }
  return row;
}

function createTable(store, arrayContent) {
  var peopleTable = document.createElement('table');
  var firstRow = generateHeadingRow(tableHeadings);
  peopleTable.appendChild(firstRow);
  function getAllRows(arrayContent) {
    for (var i = 0; i < arrayContent.length; i++) {
      row = generateDataRow(arrayContent[i]);
      peopleTable.appendChild(row);
      document.getElementById(store).appendChild(peopleTable);
    }
  }
  getAllRows(arrayContent);
  document.getElementById(store).appendChild(peopleTable);
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
  var bodyHeader = document.getElementById('feature');
  var pageHeading = document.createElement('p');
  pageHeading.textContent = totalPizzaSales + ' happy pizza odysseys this week!';
  bodyHeader.appendChild(pageHeading);
}
