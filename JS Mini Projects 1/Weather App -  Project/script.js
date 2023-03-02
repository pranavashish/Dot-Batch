const API_KEY = "67680b04b27b38f1571a8fca4fc67895";

async function showWeather() {
  let city = "goa";

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  const data = await response.json();
  console.log("Weather data :" + data);

  let newPara = document.createElement("p");
  newPara.textContent = `${data?.main?.temp.toFixed(2)} C`;

  document.body.appendChild(newPara);
}
