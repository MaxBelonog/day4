// Car Object Challenge

var newCar = function createNewCar(newModel, newYear, newMake, newColor) {
  var speed = 0
  return {
    model: newModel,
    year: newYear,
    make: newMake,
    color: newColor,
    getData: function() {
      return this.model+" "+this. year+" "+this.make+" "+this.color
    },
    getSpeed: function() {
      return (speed)
    },
    accelerate: function() {
      speed += 10
    },
    brake: function() {
      speed -= 7
    },
    goCar: function(){
      while (speed < 70){
        this.accelerate();
        speed = this.getSpeed();
        console.log(speed);
      }
    },
    slowCar: function(){
      while (speed > 0){
        this.brake();
        speed = this.getSpeed();
        console.log(speed);
      }
    }
  };
}

var liberty = newCar("Liberty", 2008, "Jeep", "Black")
var x = newCar("Truck", 2005, "truck", "purple");



//Object Oriented Password Checker
var askForUsername = prompt("What is your Username?");
var askForPassword = prompt("What is your Password?");
var newLogin = function createNewLogin (newUsername, newPassword){
  return{
    Username: newUsername,
    Password: newPassword,
  };
}

var jake = newLogin(askForUsername, askForPassword);

function userChecker(user){
  if ((typeof askForUsername === "string") && (typeof askForPassword=== "string")) {
    alert("Thanks for signing up!");
  }else{
    alert("Letters only. Try Again");
  }
}
