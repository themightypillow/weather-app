import weather from "./weather";
import * as svg from "./svg";

(function() {

  const displayWeather = async function(location) {
    // show loading
    document.querySelectorAll(".cover").forEach(cover => cover.style.display = "block");
    document.querySelector(".lds-default").style.display = "inline-block";

    const data = await weather.getData(location);
    console.log(data);

    // display top box
    document.querySelector("#big-temp").textContent = `${data.temp}°`;
    document.querySelector("#city").textContent = data.city;
    document.querySelector("#big-icon").appendChild(svg[data.icon]);

    // display middle hourly box
    document.querySelectorAll("#middle-box > div > div").forEach((hourBox, index) => {
      const hourData = data.hourly[index];
      const [time, period] = hourData.time.split(" ");

      hourBox.querySelector(".bold.small").textContent = `${hourData.temp}°`;
      hourBox.querySelector(".small-icon").appendChild(svg[hourData.icon].cloneNode(true));
      hourBox.querySelector(".bold.big").textContent = time;
      hourBox.querySelector(".period").textContent = period;
    });

    // display bottom weekly box
    document.querySelectorAll("#bottom-box > div > div").forEach((dayBox, index) => {
      const dayData = data.weekly[index];

      dayBox.querySelector(".bold.small").textContent = `${dayData.temp}°`;
      dayBox.querySelector(".small-icon").appendChild(svg[dayData.icon].cloneNode(true));
      dayBox.querySelector(".bold.big").textContent = dayData.time;
    });

    // hide loading
    document.querySelectorAll(".cover").forEach(cover => cover.style.display = "none");
    document.querySelector(".lds-default").style.display = "none";
  };
  
  (async function() {
    // initialize weather screen with default
    await displayWeather("New York, NY");
  })();

  // add error overlay when can't load weather
  

})();