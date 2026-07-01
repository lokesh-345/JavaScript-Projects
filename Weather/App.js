let input = document.getElementById("cityName");
let btn = document.getElementById("btn");
let img = document.getElementById("icon");

let city = document.getElementById("city");
let temperature = document.getElementById("temperature");
let wCondition = document.getElementById("condition");
let des = document.getElementById("description");
let humidity = document.getElementById("humid");
let windSpeed = document.getElementById("wind");
let err = document.getElementById("error");

img.style.display="none";

btn.addEventListener("click", () => {
  let search = input.value;
  if (search.trim() === "") {
    err.innerText = "Please enter a valid city";
    clear();
    return;
  }
  err.innerText = "";

  getWeather(search);
});

input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") getWeather(input.value);
});

const apiKey = "8522add5b82a86c05f0a9e9a7907da60";

const getWeather = async (search) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}`;
  let data;

  try {
    const response = await fetch(url);
    data = await response.json();
  } catch (error) {
    clear();
    err.innerText = "Something went wrong";
    return;
  }

  if (data.cod == "404") {
    clear();
    err.innerText = "City not found";
    return;
  }
  err.innerText="";
  img.style.display="block";

  let iconCode = data.weather[0].icon;
  console.log(iconCode);
  img.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  city.innerHTML = "<b>City: </b>" + data.name;
  let temp = data.main.temp;
  temperature.innerHTML = "<b>Temperature: </b>" + (temp - 273.15).toFixed(1) + " °C";
  wCondition.innerHTML = "<b>Weather Condition: </b>" + data.weather[0].main;
  des.innerHTML = "<b>Description: </b> "+ data.weather[0].description;
  humidity.innerHTML = "<b>Humidity: </b>" + data.main.humidity + "%";
  windSpeed.innerHTML = "<b>Wind Speed: </b> "+ data.wind.speed + "m/s";
};

function clear() {
  city.innerText = "";
  temperature.innerText = "";
  wCondition.innerText = "";
  des.innerText = "";
  humidity.innerText = "";
  windSpeed.innerText = "";
}
