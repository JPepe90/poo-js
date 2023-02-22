// Antes de ECMAScript6
/*
function Car(license, driver) {
  this.id;
  this.license = license;
  this.driver = driver;
  this.passenger;
}

Car.prototype.printDataCar = function() {
  console.log(this.driver);
  console.log(this.driver.name);
  console.log(this.driver.document);
}
*/
// Despues de ECMAScript6
class Car {
  constructor(license, driver){
    this.id;
    this.license = license;
    this.driver = driver;
    this.passenger;
  }

  printDataCar() {
    console.log(this.driver);
    console.log(this.driver.name);
    console.log(this.driver.document);
  }

  setPassenger(passenger) {
    if (this.passenger == 4) {
      this.passenger = passenger;
    } else {
      console.log("Cantidad de pasajeros incorrecta!");
    }
  }
}
