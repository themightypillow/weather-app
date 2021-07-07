import weather from "./weather";
import * as svg from "./svg";

(function() {

  const state = {
    isLoading: false,
    unit: "F"
  };

  const toggleLoading = function(bool) {
    document.querySelectorAll(".cover").forEach(cover => cover.style.display = bool ? "block" : "none");
    document.querySelector("#loading").style.visibility = bool ? "visible" : "hidden";
    state.isLoading = bool;
  };

  const switchUnits = function(unit) {
    if(state.unit !== unit) {
      // update top box
      document.querySelector(`#${unit}`).setAttribute("stroke", "#2e364d");
      document.querySelector(`#${state.unit}`).setAttribute("stroke", "#c9c9c9");
      document.querySelector("#big-temp").textContent = `${state["temp" + unit]}°`;

      // update hourly box
      document.querySelectorAll("#middle-box > div > div").forEach((hourBox, index) => {
        hourBox.querySelector(".bold.small").textContent = `${state.hourly[index]["temp" + unit]}°`;
      });

      // update weekly box
      document.querySelectorAll("#bottom-box > div > div").forEach((dayBox, index) => {
        dayBox.querySelector(".bold.small").textContent = `${state.weekly[index]["temp" + unit]}°`;
      });


      state.unit = unit;
    }
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
    Object.assign(state, data);

    // display top box
    document.querySelector("#big-temp").textContent = `${data.tempF}°`;
    document.querySelector("#city").textContent = data.city;
    addIcon(document.querySelector("#big-icon"), data.icon);
  
    // display middle hourly box
    document.querySelectorAll("#middle-box > div > div").forEach((hourBox, index) => {
      const hourData = data.hourly[index];
      const [time, period] = hourData.time.split(" ");

      hourBox.querySelector(".bold.small").textContent = `${hourData.tempF}°`;
      addIcon(hourBox.querySelector(".small-icon"), hourData.icon)
      hourBox.querySelector(".bold.big").textContent = time;
      hourBox.querySelector(".period").textContent = period;
    });

    // display bottom weekly box
    document.querySelectorAll("#bottom-box > div > div").forEach((dayBox, index) => {
      const dayData = data.weekly[index];

      dayBox.querySelector(".bold.small").textContent = `${dayData.tempF}°`;
      addIcon(dayBox.querySelector(".small-icon"), dayData.icon)
      dayBox.querySelector(".bold.big").textContent = dayData.time;
    });

    toggleLoading(false);
  };
  
  (async function() {
    // initialize weather screen with default
    await displayWeather("New York, NY");

    // search bar functionality
    document.querySelector("#search-box input").addEventListener("keypress", (e) => {
      if(!state.isLoading && e.key === "Enter") {
        displayWeather(e.target.value.trim());
      }
    });

    document.querySelector("#F").addEventListener("click", (e) => switchUnits("F"));
    document.querySelector("#C").addEventListener("click", (e) => switchUnits("C"));
  })();

})();