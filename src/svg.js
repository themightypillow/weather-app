const main = document.createElementNS("http://www.w3.org/2000/svg", "svg");
main.setAttributeNS(null, "width", "48");
main.setAttributeNS(null, "height", "48");
main.setAttributeNS(null, "viewBox", "0 0 24 24");
main.setAttributeNS(null, "stroke-width", "1");
main.setAttributeNS(null, "stroke", "#c9c9c9");
main.setAttributeNS(null, "fill", "none");
main.setAttributeNS(null, "stroke-linecap", "round");
main.setAttributeNS(null, "stroke-linejoin", "round");

const base = document.createElementNS("http://www.w3.org/2000/svg", "path");
base.setAttributeNS(null, "stroke", "none");
base.setAttributeNS(null, "d", "M0 0h24v24H0z");
base.setAttributeNS(null, "fill", "none");
main.appendChild(base);

const makeCircle = (data) => {
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttributeNS(null, "cx", data.cx);
  circle.setAttributeNS(null, "cy", data.cy);
  circle.setAttributeNS(null, "r", data.r);
  return circle;
}

const makePath = (d) => {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttributeNS(null, "d", d);
  return path;
}

export const sun = (() => {
  const svg = main.cloneNode(true);
  svg.appendChild(makeCircle({cx: "12", cy: "12", r: "4"}));
  svg.appendChild(makePath("M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"));
  return svg;
})();

