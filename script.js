const btn = document.getElementById("get-weather-btn");
const citySelect = document.querySelector("select");

const icon = document.getElementById("weather-icon");
const mainTemp = document.getElementById("main-temperature");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const windGust = document.getElementById("wind-gust");
const weatherMain = document.getElementById("weather-main");
const locationEl = document.getElementById("location");


async function getWeather(city) {
  try {
    const res = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}


async function showWeather(city) {

  const data = await getWeather(city);

  if (!data) {
    alert("Something went wrong, please try again later.");
    return;
  }

  icon.src = data.weather?.[0]?.icon || "";
  weatherMain.textContent = data.weather?.[0]?.main || "N/A";
  locationEl.textContent = data.name || "N/A";

  mainTemp.textContent = data.main?.temp ?? "N/A";
  feelsLike.textContent = data.main?.feels_like ?? "N/A";
  humidity.textContent = data.main?.humidity ?? "N/A";

  wind.textContent = data.wind?.speed ?? "N/A";
  windGust.textContent = data.wind?.gust ?? "N/A";
}


btn.addEventListener("click", () => {

  const city = citySelect.value;

  if (!city) return;

  if(city === "paris"){
    alert("Something went wrong, please try again later.");
    return;
  }

  showWeather(city);

});