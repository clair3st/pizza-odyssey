
//function for random number
function randomNo (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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
var HourlyData = function(time, minDelivery, maxDelivery, minPizza, maxPizza) {
  this.timeOfDay = time;
  this.pizzaSold = randomNo(minPizza, maxPizza);
  this.pizzaDelivered = randomNo(minDelivery, maxDelivery);
  this.deliveryDrivers = Math.ceil(this.pizzaDelivered / 3);
  this.deliveryDriversString = deliveryString(this.deliveryDrivers);
};

//Store data for each time in a variable using the HourlyData object constructor
var eightAM = new HourlyData ('8:00am', 0, 4, 0, 4);
var nineAM = new HourlyData ('9:00am', 0, 4, 0, 4);
var tenAM = new HourlyData ('10:00am', 0, 4, 0, 4);
var elevenAM = new HourlyData ('11:00am', 0, 4, 0, 7);
var twelvePM = new HourlyData ('12:00pm', 0, 4, 0, 7);
var onePM = new HourlyData ('1:00pm', 0, 4, 0, 7);
var twoPM = new HourlyData ('2:00pm', 1, 4, 2, 15);
var threePM = new HourlyData ('3:00pm', 1, 4, 2, 15);
var fourPM = new HourlyData ('4:00pm', 1, 4, 2, 15);
var fivePM = new HourlyData ('5:00pm', 3, 8, 15, 35);
var sixPM = new HourlyData ('6:00pm', 3, 8, 15, 35);
var sevenPM = new HourlyData ('7:00pm', 3, 8, 15, 35);
var eightPM = new HourlyData ('8:00pm', 5, 12, 12, 31);
var ninePM = new HourlyData ('9:00pm', 5, 12, 12, 31);
var tenPM = new HourlyData ('10:00pm', 5, 12, 12, 31);
var elevenPM = new HourlyData ('11:00pm', 6, 11, 5, 20);
var twelveAM = new HourlyData ('12:00pm', 6, 11, 5, 20);
var oneAM = new HourlyData ('1:00pm', 6, 11, 5, 20);

//Variables for each time of day is stored in an array.
var hoursOfTheDayArray = [eightAM, nineAM, tenAM, elevenAM, twelvePM, onePM, twoPM, threePM, fourPM, fivePM, sixPM, sevenPM, eightPM, ninePM, tenPM, elevenPM, twelveAM, oneAM];

//function to display each hour on DOM as a bullet point
function DOMdisplay(htmlID) {
  for (var i = 0; i < hoursOfTheDayArray.length; i++) {
    var bodyHeader = document.getElementById(htmlID);
    var pageHeading = document.createElement('li');
    pageHeading.textContent = hoursOfTheDayArray[i].timeOfDay + ' ' + hoursOfTheDayArray[i].pizzaSold + ' pizzas, ' + hoursOfTheDayArray[i].pizzaDelivered + hoursOfTheDayArray[i].deliveryDriversString;
    bodyHeader.appendChild(pageHeading);
  }
}

DOMdisplay('ballardList');
DOMdisplay('firstHillList');
DOMdisplay('intDistrictList');
DOMdisplay('sthLakeUnion');
DOMdisplay('georgetownList');
DOMdisplay('ravennaList');
