// - - - - - - - - - - - -Tab Handling- - - - - - - - - - - -
const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");
const userInfoContainer = document.querySelector(".user-info-container");
const grantAccessContainer = document.querySelector(
  ".grant-location-container"
);
const searchForm = document.querySelector("[data-searchForm ]");
const searchInp = document.querySelector("[data-searchInp]");
const apiErrorContainer = document.querySelector(".api-error-container");
let currentTab = userTab;
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

// Setting default tab
currentTab.classList.add("current-tab");

function switchTab(clickedTab) {
  apiErrorContainer.classList.remove("active");
  if (clickedTab !== currentTab) {
    currentTab.classList.remove("current-tab");
    currentTab = clickedTab;
    currentTab.classList.add("current-tab");
    if (!searchForm.classList.contains("active")) {
      userInfoContainer.classList.remove("active");
      grantAccessContainer.classList.remove("active");
      searchForm.classList.add("active");
    } else {
      searchForm.classList.remove("active");
      userInfoContainer.classList.remove("active");
      getFromSessionStorage();
    }
    // console.log("Current Tab", currentTab);
  }
}

userTab.addEventListener("click", () => {
  switchTab(userTab);
});
searchTab.addEventListener("click", () => {
  switchTab(searchTab);
});

// - - - - - - - - - - - -User Weather Handling- - - - - - - - - - - -
const grantAccessBtn = document.querySelector("[data-grantAccess]");
const messageText = document.querySelector("[data-messageText]");
const loadingScreen = document.querySelector(".loading-container");
const apiErrorImg = document.querySelector("[data-notFoundImg]");
const apiErrorMessage = document.querySelector("[data-apiErrorText]");
const apiErrorBtn = document.querySelector("[data-apiErrorBtn]");

// Check if coordinates are already present in Session Storage
function getFromSessionStorage() {
  const localCoordinates = sessionStorage.getItem("user-coordinates");
  if (!localCoordinates) {
    grantAccessContainer.classList.add("active");
  } else {
    const coordinates = JSON.parse(localCoordinates);
    fetchUserWeatherInfo(coordinates);
  }
}

// Get Coordinates using geoLocation
// https://www.w3schools.com/html/html5_geolocation.asp
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    grantAccessBtn.style.display = "none";
    messageText.innerText = "Geolocation is not supported by this browser.";
  }
}

// Store User Coordinates
function showPosition(position) {
  const userCoordinates = {
    lat: position.coords.latitude,
    lon: position.coords.longitude,
  };
  sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
  fetchUserWeatherInfo(userCoordinates);
}

// Handle any errors
function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      messageText.innerText = "You denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      messageText.innerText = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      messageText.innerText = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      messageText.innerText = "An unknown error occurred.";
      break;
  }
}

getFromSessionStorage();
grantAccessBtn.addEventListener("click", getLocation);

// fetch data from API - user weather info
async function fetchUserWeatherInfo(coordinates) {
  const { lat, lon } = coordinates;

  grantAccessContainer.classList.remove("active");
  loadingScreen.classList.add("active");

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    const data = await res.json();
    // console.log("User - Api Fetch Data", data);
    if (!data.sys) {
      throw data;
    }
    loadingScreen.classList.remove("active");
    userInfoContainer.classList.add("active");
    renderWeatherInfo(data);
  } catch (error) {
    // console.log("User - Api Fetch Error", error.message);
    loadingScreen.classList.remove("active");
    apiErrorContainer.classList.add("active");
    apiErrorImg.style.display = "none";
    apiErrorMessage.innerText = `Error: ${error?.message}`;
    apiErrorBtn.addEventListener("click", fetchUserWeatherInfo);
  }
}

// Render weather Info In UI
function renderWeatherInfo(weatherInfo) {
  // console.log("Weather Info", weatherInfo);
  const cityName = document.querySelector("[data-cityName]");
  const countryIcon = document.querySelector("[data-countryIcon]");
  const desc = document.querySelector("[data-weatherDesc]");
  const weatherIcon = document.querySelector("[data-weatherIcon]");
  const temp = document.querySelector("[data-temp]");
  const windspeed = document.querySelector("[data-windspeed]");
  const humidity = document.querySelector("[data-humidity]");
  const cloudiness = document.querySelector("[data-cloudiness]");

  cityName.innerText = weatherInfo?.name;
  countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
  desc.innerText = weatherInfo?.weather?.[0]?.main;
  weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
  temp.innerText = `${weatherInfo?.main?.temp.toFixed(2)} °C`;
  windspeed.innerText = `${weatherInfo?.wind?.speed.toFixed(2)}m/s`;
  humidity.innerText = `${weatherInfo?.main?.humidity}%`;
  cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;
}

// - - - - - - - - - - - -Search Weather Handling- - - - - - - - - - - -

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (searchInp.value === "") return;
  // console.log(searchInp.value);
  fetchSearchWeatherInfo(searchInp.value);
  searchInp.value = "";
});

// fetch data from API - user weather info
async function fetchSearchWeatherInfo(city) {
  loadingScreen.classList.add("active");
  userInfoContainer.classList.remove("active");
  apiErrorContainer.classList.remove("active");

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await res.json();
    // console.log("Search - Api Fetch Data", data);
    if (!data.sys) {
      throw data;
    }
    loadingScreen.classList.remove("active");
    userInfoContainer.classList.add("active");
    renderWeatherInfo(data);
  } catch (error) {
    // console.log("Search - Api Fetch Error", error.message);
    loadingScreen.classList.remove("active");
    apiErrorContainer.classList.add("active");
    apiErrorMessage.innerText = `${error?.message}`;
    apiErrorBtn.style.display = "none";
  }
}
