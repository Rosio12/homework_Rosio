/*
* You get to give yourself an awesome vehicle
* It is an object
* Make it badass
* Be sure to give it the following:
*   - a name that is a string
*   - a distanceToEmpty that is a number of kilometers it can travel
*   - a speed that is a number and represents the number of km/hr your vehicle can travel
*   - a currentLocation
*   - a honkHorn method that returns a string of the sound that your vehicle makes when you honk the horn
*/
var vehicle = {}

var car = {
  driver: "unknown",
  setDriver: function(person){
    this.driver = person.name;
  }
}
var person = {
  name: "Rosio",
}

car.setDriver(person);
console.log(car.driver);

//

var vehicle = function() {
  name: "VespaGTS300Touring",
  console.log(vehicle.name());
  ],

  getcookie: function (index){
    return this.flavors[index];
  }

};

console.log(cookieVendingmachine.getcookie(1));
