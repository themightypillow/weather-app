import * as svg from "./svg";

document.querySelector("#big-icon").appendChild(svg.bigSun);
document.querySelectorAll("#middle-box .time-icon")[0].appendChild(svg.smallSun.cloneNode(true));
document.querySelectorAll("#middle-box .time-icon")[1].appendChild(svg.smallCloud.cloneNode(true));
document.querySelectorAll("#middle-box .time-icon")[2].appendChild(svg.smallRain.cloneNode(true));
document.querySelectorAll("#middle-box .time-icon")[3].appendChild(svg.smallSnow.cloneNode(true));
document.querySelectorAll("#middle-box .time-icon")[4].appendChild(svg.smallStorm.cloneNode(true));

document.querySelectorAll("#bottom-box .time-icon")[0].appendChild(svg.smallWind.cloneNode(true));
document.querySelectorAll("#bottom-box .time-icon")[1].appendChild(svg.smallSun.cloneNode(true));
document.querySelectorAll("#bottom-box .time-icon")[2].appendChild(svg.smallCloud.cloneNode(true));
document.querySelectorAll("#bottom-box .time-icon")[3].appendChild(svg.smallRain.cloneNode(true));
document.querySelectorAll("#bottom-box .time-icon")[4].appendChild(svg.smallSnow.cloneNode(true));