import weather from "./weather";
import * as svg from "./svg";

(async function() {
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

  const {lat, lon, city} = await weather.getCoords("Bellerose, NY");
  console.log(`lat: ${lat}\nlon: ${lon}\ncity: ${city}`);
  const data = await weather.getWeather(lat, lon);
  console.log(data);

})();