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
/*var vehicle = {}

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

*/
var vehicle =
  {
  name: "VespaGTS300Touring",
  honkHorn: "Playing a Nice Song"
  }

var distanceToEmpty = function(distance){
  if (distance >= 99){
    console.log(vehicle.name + " needs more gas to get to" + destination.cities(0) + ", pleeeeze");
  }
  else if(distance < 99){
    console.log("VespaGTS300Touring you can keep on going");
  }
};

function canImakeIt(){
  if (canImakeIt > 99){
    console.log("you will need to stop for gas");
  }
  else if(canImakeIt <= 99){
      console.log("you'll make it all the way w/o stopping for gas");
    }
  console.log(destination.cities(0));
};


distanceToEmpty(99);
var speed = 75;
var currentLocation = "Beverly Hills";
var destination =
  {
  cities: "Palm Springs", "San Diego",
  Miles: 120, 133
  }

canImakeIt(120);


console.log("I am a " + vehicle.name);
console.log(vehicle.honkHorn + " when I want to honk");
