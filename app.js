
//function for random number
function randomNo (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function StoreLocation(name){
  this.name = name;
  this.hourlyData = [];
}

//function for string to output depending on the amount of delivery drivers
function deliveryString (drivers) {
  if (drivers === 0) {
    return ' -- [driver not recommended ]';
  } else {
    return ' -- [drivers recommended: ' + drivers + ' ]';
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

console.log(ballard);

//Variables for each time of day is stored in an array.
var hoursOfTheDayArray = ['8:00am',eightAM, nineAM, tenAM, elevenAM, twelvePM, onePM, twoPM, threePM, fourPM, fivePM, sixPM, sevenPM, eightPM, ninePM, tenPM, elevenPM, twelveAM, oneAM];

//function to display each hour on DOM as a bullet point
function DOMdisplay(htmlID) {
  for (var i = 0; i < hoursOfTheDayArray.length; i++) {
    var bodyHeader = document.getElementById(htmlID);
    var pageHeading = document.createElement('li');
    pageHeading.textContent = htmlID.hourlyData[i].time + ' ' + htmlID.hourlyData[i].pizzaSold + ' pizzas, ' + htmlID.hourlyData[i].pizzaDelivered + htmlID.hourlyData[i].deliveryDriversString;
    bodyHeader.appendChild(pageHeading);
  }
}

DOMdisplay('ballard');
DOMdisplay('firstHillList');
DOMdisplay('intDistrictList');
DOMdisplay('sthLakeUnion');
DOMdisplay('georgetownList');
DOMdisplay('ravennaList');
