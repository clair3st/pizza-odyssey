
//function for random number
function randomNo (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//arrays of opening hours
var openHoursArray = ['8:00am','9:00am','10:00am','11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm,', '7:00pm', '8:00pm', '9:00pm', '10:00pm', '11:00pm', '12:00am', '1:00am'];

//function to create random number of pizza sold based on provided information
function getPizzasSold(i){
  var pizzaSold = 0;
  if (i < 3) {
    pizzaSold = randomNo(0,4);
  } else if (i > 2 && i < 6) {
    pizzaSold = randomNo(0,7);
  } else if (i > 5 && i < 9) {
    pizzaSold = randomNo(2,15);
  } else if (i > 8 && i < 12) {
    pizzaSold = randomNo(15,35);
  } else if (i > 11 && i < 15) {
    pizzaSold = randomNo(12,31);
  } else {
    pizzaSold = randomNo(5,20);
  }
  return pizzaSold;
}

//function to create a random number of deliveries based on info
function getDeliveriesMade(i) {
  var pizzaDelivered = 0;
  if (i < 6) {
    pizzaDelivered = randomNo(0,4);
  } else if (i > 5 && i < 9) {
    pizzaDelivered = randomNo(1,4);
  } else if (i > 8 && i < 12) {
    pizzaDelivered = randomNo(5,20);
  } else if (i > 11 && i < 15) {
    pizzaDelivered = randomNo(5,12);
  } else {
    pizzaDelivered = randomNo(6,11);
  }
  return pizzaDelivered;
}

//function to create an array containing objects of sales data(time, pizzas sold and delivered)
function salesData() {
  salesDataArray = [];
  for (var i = 0; i < openHoursArray.length; i++) {
    salesDataArray.push({
      time: openHoursArray[i],
      pizzas: getPizzasSold(i),
      delivery: getDeliveriesMade(i),
    });
  }
  return salesDataArray;
}

//Create Objects for each location
var ballard = {
  name: 'Ballard',
  storeData: salesData(),
};

var firstHill = {
  name: 'First Hill',
  storeData: salesData(),
};

var intDistrict = {
  name: 'International District',
  storeData: salesData(),
};

var sthLakeUnion = {
  name: 'South Lake Union',
  storeData: salesData(),
};

var georgetown = {
  name: 'Georgetown',
  storeData: salesData(),
};

var ravenna = {
  name: 'Ravenna',
  storeData: salesData(),
};

//Add a function to work out how many drivers we need
function drivers(x) {
  return Math.ceil(x / 3);
}
//function to generate a string depending on drivers required
function deliveryString (drivers) {
  if (drivers === 0) {
    return ' -- [driver not recommended ]';
  } else {
    return ' -- [drivers recommended: ' + drivers + ' ]';
  }
}

//function to print to DOM.
function salesDataDisplay(restaurantObject) {
  for (var i = 0; i < openHoursArray.length; i++) {
    htmlListUL = document.getElementById(restaurantObject.name);
    restaurantList = document.createElement('li');
    restaurantList.textContent = restaurantObject.storeData[i].time + ' ' + restaurantObject.storeData[i].pizzas + ' pizzas, ' + restaurantObject.storeData[i].delivery + ' deliveries ' + deliveryString(drivers(restaurantObject.storeData[i].delivery));
    htmlListUL.appendChild(restaurantList);
  }
}

//function calls for each location
salesDataDisplay(ballard);
salesDataDisplay(firstHill);
salesDataDisplay(intDistrict);
salesDataDisplay(sthLakeUnion);
salesDataDisplay(georgetown);
salesDataDisplay(ravenna);
