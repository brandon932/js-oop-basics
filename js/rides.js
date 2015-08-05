var child = {
  height: 3,
  name: "Julian",
  age: 3
};

var child2 = {
  height: 4,
  name: "Cero",
  age: 4
};

var ride = {
  minHeight: 3,
  maxHeight: 7
};

var ride2 = {
  minHeight: 4,
  maxHeight: 7
};

var RideCheck = function(child, ride){
  this.childHeight = child.height;
  this.rideMin = ride.minHeight;
  this.rideMax = ride.maxHeight;
};
RideCheck.prototype.properHeight = function(){
  if (this.childHeight >= this.rideMin && this.childHeight <= this.rideMax) {
    return true;
  }else{
      return false;
    }
};


var firstRide = new RideCheck(child2, ride2);
// console.log(firstRide);
// console.log(firstRide.properHeight());
