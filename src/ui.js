import weather from "./weather";
import * as svg from "./svg";

(function() {

  const displayWeather = async function(location) {
    const data = await weather.getData(location);
    console.log(data);

    // display top box
    document.querySelector("#big-temp").textContent = `${data.temp}°`;
    document.querySelector("#city").textContent = data.city;
    document.querySelector("#big-icon").appendChild(svg[data.icon]);

  };

  // initialize weather screen with default
  (async function() {
    await displayWeather("New York, NY");
    // stop showing the loading screen
  })();

  // add error overlay when can't load weather
  

})();