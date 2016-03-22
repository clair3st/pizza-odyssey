
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
var timeDeliveryPizza = function(time, minDelivery, maxDelivery, minPizza, maxPizza) {
  this.timeOfDay = time;
  this.pizzaSold = randomNo(minPizza, maxPizza);
  this.pizzaDelivered = randomNo(minDelivery, maxDelivery);
  this.deliveryDrivers = Math.ceil(this.pizzaDelivered / 3);
  this.deliveryDriversString = deliveryString(this.deliveryDrivers);
};

//Store data for each time in a variable using the timeDeliveryPizza object constructor
var eightAM = new timeDeliveryPizza ('8:00am', 0, 4, 0, 4);
var nineAM = new timeDeliveryPizza ('9:00am', 0, 4, 0, 4);
var tenAM = new timeDeliveryPizza ('10:00am', 0, 4, 0, 4);
var elevenAM = new timeDeliveryPizza ('11:00am', 0, 4, 0, 7);
var twelvePM = new timeDeliveryPizza ('12:00pm', 0, 4, 0, 7);
var onePM = new timeDeliveryPizza ('1:00pm', 0, 4, 0, 7);
var twoPM = new timeDeliveryPizza ('2:00pm', 1, 4, 2, 15);
var threePM = new timeDeliveryPizza ('3:00pm', 1, 4, 2, 15);
var fourPM = new timeDeliveryPizza ('4:00pm', 1, 4, 2, 15);
var fivePM = new timeDeliveryPizza ('5:00pm', 3, 8, 15, 35);
var sixPM = new timeDeliveryPizza ('6:00pm', 3, 8, 15, 35);
var sevenPM = new timeDeliveryPizza ('7:00pm', 3, 8, 15, 35);
var eightPM = new timeDeliveryPizza ('8:00pm', 5, 12, 12, 31);
var ninePM = new timeDeliveryPizza ('9:00pm', 5, 12, 12, 31);
var tenPM = new timeDeliveryPizza ('10:00pm', 5, 12, 12, 31);
var elevenPM = new timeDeliveryPizza ('11:00pm', 6, 11, 5, 20);
var twelveAM = new timeDeliveryPizza ('12:00pm', 6, 11, 5, 20);
var oneAM = new timeDeliveryPizza ('1:00pm', 6, 11, 5, 20);

//Variables for each time of day is stored in an array.
var hoursOfTheDayArray = [eightAM, nineAM, tenAM, elevenAM, twelvePM, onePM, twoPM, threePM, fourPM, fivePM, sixPM, sevenPM, eightPM, ninePM, tenPM, elevenPM, twelveAM, oneAM];

//Object constructor for a store.
var storeLocation = function(storeName, hourOfDay) {
  this.storeName = storeName;
  this.timeDeliveryPizza = hoursOfTheDayArray[hourOfDay];
};

//test
var Ballard = new storeLocation('Ballard', 0);
console.log(Ballard);
var ballard1 = hoursOfTheDayArray[9].timeOfDay + ' ' + hoursOfTheDayArray[9].pizzaSold + ' pizzas, ' + hoursOfTheDayArray[9].pizzaDelivered + hoursOfTheDayArray[9].deliveryDriversString;
console.log(ballard1);

//text to print
//function textDisplay

//try to display on DOM
function DOMdisplay(htmlID) {
  for (var i = 0; i < hoursOfTheDayArray.length; i++) {
    var bodyHeader = document.getElementById(htmlID);
    var pageHeading = document.createElement('li');
    pageHeading.textContent = hoursOfTheDayArray[i].timeOfDay + ' ' + hoursOfTheDayArray[i].pizzaSold + ' pizzas, ' + hoursOfTheDayArray[i].pizzaDelivered + hoursOfTheDayArray[i].deliveryDriversString;
    bodyHeader.appendChild(pageHeading);
  }
}

DOMdisplay('Ballardlist');
