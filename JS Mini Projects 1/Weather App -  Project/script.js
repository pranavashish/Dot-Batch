const API_KEY = "67680b04b27b38f1571a8fca4fc67895";

function renderWeatherInfo(data) {
  let newPara = document.createElement("p");
  newPara.textContent = `${data?.main?.temp.toFixed(2)} C`;

  document.body.appendChild(newPara);
}

async function fetchWeatherDetails() {
  try {
    let city = "goa";

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    console.log("Weather data :", data);
    renderWeatherInfo(data);
  } catch {
    e;
  }
  {
    console.log("Error aagya");
  }
}

async function getCustomWeatherDetails() {
  try {
    let lati = 77.6333;
    let long = 59.3333;

    let result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=${API_KEY}&units=metric`
    );
    let data = await result.json();
    console.log(data);
    renderWeatherInfo(data);
  } catch (e) {
    console.log("Error aagya", e);
  }
}

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
      //getFromSessionStorage();
    }

    // console.log("Current Tab", currentTab);
  }
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("No geoLocation Support");
  }
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;

  console.log(lat);
  console.log(long);
}
