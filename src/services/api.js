import Methods from "./methods";

let URL = "https://topicos3-back-end.herokuapp.com/";

function fullUrl(aux) {
  let self = URL + aux;
  return self;
}

var entity;

export default URL;

export class parkingLot {
  parkingLotMethod = new Methods();
  constructor() {
    this.entity = fullUrl("parkingLot");
  }

  //Geral
  create(par) {
    return this.parkingLotMethod.create(this.entity, par);
  }

  //A
  getParkingLot(id) {
    return this.parkingLotMethod.getParkingLot(this.entity, id);
  }

  //Criar vaga
  createparkingLot(par) {
    return this.parkingLotMethod.createparkingLot(this.entity, par);
  }
}

export class driver {
    driverMethod = new Methods();
    constructor() {
      this.entity = fullUrl("driver");
    }

    //Geral
    create(par) {
        return this.driverMethod.create(this.entity, par);
    }
    
    createDriver(par) {
        return this.driverMethod.createDriver(this.entity, par);
      }
    editDriver(par, id) {
      return this.driverMethod.editDriver(this.entity, par, id);
    }
    deleteDriver(id, filter) {
      return this.driverMethod.deleteDriver(this.entity, id, filter);
    }
    getDriver(id) {
      return this.driverMethod.getDriver(this.entity, id);
    }
    //
  
  }

export class authenticate {
    authenticateMethod = new Methods();
    constructor() {
      this.entity = fullUrl("authenticate");
    }
    DriverLogin(par) {
      return this.authenticateMethod.DriverLogin(this.entity, par);
    }
  }