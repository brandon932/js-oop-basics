// add scripts
var car = {
  milesPerGallon: 20,
  gallonsInTank:3 
};

var route = {
  miles: 200,
  destination: "Boulder",
  location: "Fancy Land"
};

var Trip = function(car, route) {
  this.carMpg = car.milesPerGallon;
  this.gasAmt = car.gallonsInTank;
  this.travleMiles = route.miles;
};

Trip.prototype.checkDistance = function(){
  if (this.carMpg * this.gasAmt === this.travleMiles){
    return true;
  }else{
    return false;
  }
};


var toBoulder = new Trip(car, route);
console.log(toBoulder);
console.log(toBoulder.checkDistance());
