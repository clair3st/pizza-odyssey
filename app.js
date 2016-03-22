
//function for random number
function randomNo (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var timeDeliveryPizza = function(time, minDelivery, maxDelivery, minPizza, maxPizza) {
  this.timeOfDay = time;
  this.pizzaSold = randomNo(minPizza, maxPizza);
  this.pizzaDelivered = randomNo(minDelivery, maxDelivery);
};

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
