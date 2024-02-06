let plantslistHTML = document.querySelector(".plantslist");
let soilslistHTML = document.querySelector(".soilslist");
let accessoriesslistHTML = document.querySelector(".accessoriesslist");
let body = document.querySelector("body");
let plantslist = [];
let soilslist = [];
let accessoriesslist = [];

const displayAllPlants = () => {
  plantslistHTML.innerHTML = "";
  if (plantslist.length > 0) {
    //if plantlist has data then it checks each plant
    plantslist.forEach((plant) => {
      let newplant = document.createElement("div");
      newplant.dataset.id = plant.id;
      newplant.classList.add("item");
      newplant.innerHTML = `<img src="${plant.image}">
                <h3>${plant.name}</h3>
                <div class="price">$${plant.price}</div>`;
      plantslistHTML.appendChild(newplant);
    });
  }
};

const initApp = () => {
  fetch("plants.json")
    .then((response) => response.json())
    .then((data) => {
      plantslist = data;
      console.log(plantslist);
      displayAllPlants();
    });
};

initApp();

const addSoilsToHTML = () => {
  soilslistHTML.innerHTML = "";
  if (soilslist.length > 0) {
    soilslist.forEach((soil) => {
      let newSoil = document.createElement("div");
      newSoil.dataset.id = soil.id;
      newSoil.classList.add("item");
      newSoil.innerHTML = `<img src="${soil.image}" alt="">
                <h2>${soil.name}</h2>
                <div class="price">$${soil.price}</div>`;
      soilslistHTML.appendChild(newSoil);
    });
  }
};

const initSoils = () => {
  // Fetch soil data
  fetch("soil.json")
    .then((response) => response.json())
    .then((data) => {
      soilslist = data;
      console.log(soilslist);
      addSoilsToHTML();
    });
};

// Call the initSoils function to initialize the soil data
initSoils();


const addAccessoriesToHTML = () => {
  accessoriesslistHTML.innerHTML = "";
  if (accessoriesslist.length > 0) {
    accessoriesslist.forEach((accessory) => {
      let newAccessory = document.createElement("div");
      newAccessory.dataset.id = accessory.id;
      newAccessory.classList.add("item");
      newAccessory.innerHTML = `<img src="${accessory.image}" alt="">
                <h2>${accessory.name}</h2>
                <div class="price">$${accessory.price}</div>`;
      accessoriesslistHTML.appendChild(newAccessory);
    });
  }
};

const initAccessories = () => {
  // Fetch accessory data
  fetch("accessories.json")
    .then((response) => response.json())
    .then((data) => {      accessoriesslist = data;
      console.log(accessoriesslist);
      addAccessoriesToHTML();
    });
};

// Call the initAccessories function to initialize the accessory data
initAccessories();
