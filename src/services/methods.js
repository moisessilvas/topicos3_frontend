import axios from "axios";

let endpoints = {
  parkingLot: "/parkingLot",
  parkingSpace: "/parkingLot/parkingSpace",
  driver: "/driver",
};

let newFilter;

function getFilters(filter) {
  var filterURL;
  if (Array.isArray(filter)) {
    filterURL = "?";
    for (let i = 0; i < filter.length; i++) {
      filterURL += filter[i]["header"] + "=" + filter[i]["value"];
      if (i !== filter.length - 1) {
        filterURL += "&";
      }
    }
    return filterURL;
  }else{
    filter = '';
    return filter;
  }
}

var token = localStorage.getItem("user_token");

export default class Methods {
  //Motorista
  DriverLogin(entity, par) {
    return axios.post(entity + endpoints.driver, par, {
      headers: { "x-access-token": token },
    });
  }

  editDriver(entity, par, id) {
    return axios.put(entity + endpoints.driver + "/" + id, par, {
      headers: { "x-access-token": token },
    });
  }

  deleteDriver(entity, par, id) {
    return axios.delete(entity + endpoints.driver + "/" + id, par, {
      headers: { "x-access-token": token },
    });
  }

  //Estacionamento
  editParkingLot(entity, par, id) {
    return axios.put(entity + endpoints.parkingLot + "/" + id, par, {
      headers: { "x-access-token": token },
    });
  }

  deleteParkingLot(entity, par, id) {
    return axios.delete(entity + endpoints.parkingLot + "/" + id, par, {
      headers: { "x-access-token": token },
    });
  }
  
  getAllParking(entity, filter) {
    newFilter = getFilters(filter);
    return axios.get(entity + endpoints.parkingLot + newFilter, {
      headers: { "x-access-token": token },
    });
  }

  getParkingSpace(entity, par, id) {
    return axios.get(entity + endpoints.parkingSpace + "/" + id, par, {
      headers: { "x-access-token": token },
    });
  }

  postParkingSpace(entity, par, id) {
    return axios.post(entity + endpoints.parkingSpace + "/" + id, par, {
      headers: { "x-access-token": token },
    });
  }


}
