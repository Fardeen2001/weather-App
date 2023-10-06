let submit = document.getElementById("submit1");
let input = document.getElementById("city");
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3e155061f8mshe8f619d3de0b02ep192b10jsnbce199182fd7",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  fetch(
    `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      cityName.innerHTML = city;

      CloudPct.innerHTML = response.cloud_pct;
      FeelsLike.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      maxTemp.innerHTML = response.max_temp;
      minTemp.innerHTML = response.min_temp;
      sunrise.innerHTML = new Date(response.sunrise * 1000).toLocaleTimeString(
        "default"
      );
      sunset.innerHTML = new Date(response.sunset * 1000).toLocaleTimeString(
        "default"
      );
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      //   winddegree.innerHTML = response.wind_degree;
      windspeed.innerHTML = response.wind_speed;
      windspeed2.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(input.value);
});
getWeather("Pavagada");
