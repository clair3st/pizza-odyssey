
//function for random number
function randomNo (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//arrays of opening hours
var openHoursArray = ['8:00am','9:00am','10:00am','11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm,', '7:00pm', '8:00pm', '9:00pm', '10:00pm', '11:00pm', '12:00am', '1:00am'];

//add data to pizzaSold array
var pizzaSold = [];
for (var i = 0; i < openHoursArray.length; i++) {
  if (i < 3) {
    pizzaSold.push(randomNo(0,4));
  } else if (i > 2 && i < 6) {
    pizzaSold.push(randomNo(0,7));
  } else if (i > 5 && i < 9) {
    pizzaSold.push(randomNo(2,15));
  } else if (i > 8 && i < 12) {
    pizzaSold.push(randomNo(15,35));
  } else if (i > 11 && i < 15) {
    pizzaSold.push(randomNo(12,31));
  } else {
    pizzaSold.push(randomNo(5,20));
  }
}
console.log(pizzaSold);

//add data to pizzaDelivered Array
var pizzaDelivered = [];
for (var i = 0; i < openHoursArray.length; i++) {
  if (i < 6) {
    pizzaDelivered.push(randomNo(0,4));
  } else if (i > 5 && i < 9) {
    pizzaDelivered.push(randomNo(1,4));
  } else if (i > 8 && i < 12) {
    pizzaDelivered.push(randomNo(5,20));
  } else if (i > 11 && i < 15) {
    pizzaDelivered.push(randomNo(5,12));
  } else {
    pizzaDelivered.push(randomNo(6,11));
  }
}
console.log(pizzaDelivered);

//Array of delivery drivers
var deliveryDriversRequired = [];
for (var i = 0; i < openHoursArray.length; i++) {
  deliveryDriversRequired.push(Math.ceil(pizzaDelivered[i] / 3));
}

//Add string depending on drivers
function deliveryString (drivers) {
  if (drivers === 0) {
    return ' -- [driver not recommended ]';
  } else {
    return ' -- [drivers recommended: ' + drivers + ' ]';
  }
}

//add data to salesDataArray which is objects of sales data for each time.
var salesDataArray = [];
for (var i = 0; i < openHoursArray.length; i++) {
  salesDataArray.push({
    time: openHoursArray[i],
    pizzas: pizzaSold[i],
    delivery: pizzaDelivered[i],
    deliveryDriver: deliveryDriversRequired[i],
    deliveryString: deliveryString(deliveryDriversRequired[i]),
  });
}
console.log(salesDataArray);

//Create Ballard Object
var ballard = {
  name: 'Ballard',
  storeData: salesDataArray,
};
console.log(ballard.name);

//Try to print to DOM.
var ballardUL = document.getElementById('ballardList');
var ballardULlist = document.createElement('li');
ballardULlist.textContent = 'ballard.name';
ballardULlist.appendChild = ballardULlist;
/*
var eightOclockLi;
for (var i = 0; i < ballard.hourlyData.length; i++) {
  eigthOclockLi = document.createElement('li');
  eightOclockLi.textContent =*/
