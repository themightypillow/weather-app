import weather from "./weather";
import * as svg from "./svg";

(function() {

  let isLoading = true;

  const toggleLoading = function(bool) {
    document.querySelectorAll(".cover").forEach(cover => cover.style.display = bool ? "block" : "none");
    document.querySelector(".lds-default").style.display = bool ? "inline-block" : "none";
    isLoading = bool;
  };

  const addIcon = function(parent, iconName) {
    if(parent.querySelector("svg")) {
      parent.replaceChild(svg[iconName].cloneNode(true), parent.querySelector("svg"));
    }
    else {
      parent.appendChild(svg[iconName].cloneNode(true));
    }
  }

  const displayWeather = async function(location) {
    toggleLoading(true);

    const data = await weather.getData(location);
    console.log(data);

    // display top box
    document.querySelector("#big-temp").textContent = `${data.temp}°`;
    document.querySelector("#city").textContent = data.city;
    addIcon(document.querySelector("#big-icon"), data.icon);
  
    // display middle hourly box
    document.querySelectorAll("#middle-box > div > div").forEach((hourBox, index) => {
      const hourData = data.hourly[index];
      const [time, period] = hourData.time.split(" ");

      hourBox.querySelector(".bold.small").textContent = `${hourData.temp}°`;
      addIcon(hourBox.querySelector(".small-icon"), hourData.icon)
      hourBox.querySelector(".bold.big").textContent = time;
      hourBox.querySelector(".period").textContent = period;
    });

    // display bottom weekly box
    document.querySelectorAll("#bottom-box > div > div").forEach((dayBox, index) => {
      const dayData = data.weekly[index];

      dayBox.querySelector(".bold.small").textContent = `${dayData.temp}°`;
      addIcon(dayBox.querySelector(".small-icon"), dayData.icon)
      dayBox.querySelector(".bold.big").textContent = dayData.time;
    });

    toggleLoading(false);
  };
  
  (async function() {
    // initialize weather screen with default
    await displayWeather("New York, NY");
    document.querySelector("#search-box input").addEventListener("keypress", (e) => {
      if(!isLoading && e.key === "Enter") {
        displayWeather(e.target.value.trim());
      }
    });
  })();

})();