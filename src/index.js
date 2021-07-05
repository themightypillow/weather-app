import { addHours, addDays, format } from "date-fns";
import * as svg from "./svg";

function findWeatherType(id) {
  if(id >= 200 && id < 300) return "Storm";
  if(id >= 300 && id < 400) return "Rain";
  if(id >= 500 && id < 600) return "Rain";
  if(id >= 600 && id < 700) return "Snow";
  if(id >= 700 && id < 800) return "Mist";
  if(id === 800) return "Sun";
  if(id > 800 && id < 900) return "Cloud";
}

function formatWeatherData(now, dataArray, isHour) {
  return dataArray.map((data, index) => {
    return {
      temp: Math.ceil(isHour ? data.temp : data.temp.day),
      icon: svg[`small${findWeatherType(data.weather[0].id)}`],
      time: isHour ? format(addHours(now, index + 1), "h:00 aa") : format(addDays(now, index + 1), "E")
    };
  });
}

async function getCoords(place) {
  const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${place}`);
  const data = await response.json();
  return {
    lat: data[0].lat,
    lon: data[0].lon,
    city: data[0].display_name.slice(0, data[0].display_name.indexOf(",") === -1 ? data[0].display_name.length : data[0].display_name.indexOf(","))
  };
}

async function getWeather(lat, lon) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=imperial&appid=c88ef095fba1959850e425433fdde06e`);
  const data = await response.json();
  const now = new Date();
  return {
    temp: Math.ceil(data.current.temp),
    icon: svg[`big${findWeatherType(data.current.weather[0].id)}`],
    hourly: formatWeatherData(now, data.hourly.slice(0, 24), true),
    weekly: formatWeatherData(now, data.daily.slice(1), false)
  };
}

document.querySelector("#big-icon").appendChild(svg.bigMist);
document.querySelectorAll("#middle-box .small-icon")[0].appendChild(svg.smallSun.cloneNode(true));
document.querySelectorAll("#middle-box .small-icon")[1].appendChild(svg.smallCloud.cloneNode(true));
document.querySelectorAll("#middle-box .small-icon")[2].appendChild(svg.smallRain.cloneNode(true));
document.querySelectorAll("#middle-box .small-icon")[3].appendChild(svg.smallSnow.cloneNode(true));
document.querySelectorAll("#middle-box .small-icon")[4].appendChild(svg.smallStorm.cloneNode(true));

document.querySelectorAll("#bottom-box .small-icon")[0].appendChild(svg.smallMist.cloneNode(true));
document.querySelectorAll("#bottom-box .small-icon")[1].appendChild(svg.smallSun.cloneNode(true));
document.querySelectorAll("#bottom-box .small-icon")[2].appendChild(svg.smallCloud.cloneNode(true));
document.querySelectorAll("#bottom-box .small-icon")[3].appendChild(svg.smallRain.cloneNode(true));
document.querySelectorAll("#bottom-box .small-icon")[4].appendChild(svg.smallSnow.cloneNode(true));

// main
(async function() {
  const {lat, lon, city} = await getCoords("Bellerose, NY");
  console.log(`lat: ${lat}\nlon: ${lon}\ncity: ${city}`);
  const data = await getWeather(lat, lon);
  console.log(data);
})();