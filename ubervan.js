class UberVan extends Car {
  constructor (license, driver, typeCarAccepted, seatsMaterial) {
    super(license, driver)
    this.typeCarAccepted = typeCarAccepted;
    this.seatsMaterial = seatsMaterial;
    this.passenger = 7;
  }

  setPassenger(passenger) {
    if (this.passenger == 6) {
      this.passenger = passenger;
    } else {
      console.log("Cantidad de pasajeros incorrecta! Para un UberVan deben ser 6 plazas!");
    }
  }
}