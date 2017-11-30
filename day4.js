//New Car Object
function createNewCar(newModel, newYear, newMake, newColor) {
  return {
  model: newModel,
  year: newYear,
  make: newMake,
  color: newColor,
  getData: function() {
    return this.model+" "+this. year+" "+this.make+" "+this.color
    }
  };
}

var car = createNewCar("Liberty", 2008, "Jeep", "Black");



//

var newCar = function createNewCar(newModel, newYear, newMake, newColor) {
  var speed = 0;
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

  };
}

var liberty = newCar("Liberty", 2008, "Jeep", "Black");
var x = newCar("Truck", 2005, "truck", "purple");
