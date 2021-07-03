const base = (size, color, thickness) => {
  const main = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  main.setAttributeNS(null, "width", size);
  main.setAttributeNS(null, "height", size);
  main.setAttributeNS(null, "viewBox", "0 0 24 24");
  main.setAttributeNS(null, "stroke-width", thickness);
  main.setAttributeNS(null, "stroke", color);
  main.setAttributeNS(null, "fill", "none");
  main.setAttributeNS(null, "stroke-linecap", "round");
  main.setAttributeNS(null, "stroke-linejoin", "round");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttributeNS(null, "stroke", "none");
  path.setAttributeNS(null, "d", "M0 0h24v24H0z");
  path.setAttributeNS(null, "fill", "none");
  main.appendChild(path);
  return main;
};

const makeCircle = (data, fill = "none") => {
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttributeNS(null, "cx", data.cx);
  circle.setAttributeNS(null, "cy", data.cy);
  circle.setAttributeNS(null, "r", data.r);
  circle.setAttributeNS(null, "fill", fill);
  return circle;
}

const makePath = (d, stroke = false, fill = false, width = false) => {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttributeNS(null, "d", d);
  if(stroke) path.setAttributeNS(null, "stroke", stroke);
  if(fill) path.setAttributeNS(null, "fill", fill);
  if(width) path.setAttributeNS(null, "stroke-width", width);
  return path;
}

const makePoly = (points, stroke = false, width = false) => {
  const poly = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
  poly.setAttributeNS(null, "points", points);
  if(stroke) poly.setAttributeNS(null, "stroke", stroke);
  if(width) poly.setAttributeNS(null, "stroke-width", width);
  return poly;
}

export const sun = (() => {
  const svg = base("150", "#f5cc62", "0.5");
  svg.appendChild(makeCircle({cx: "12", cy: "12", r: "4"}, "#fdf0d0"));
  svg.appendChild(makePath("M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"));
  return svg;
})();

export const cloud = (() => {
  const svg = base("150", "#c9c9c9", "0.5");
  svg.appendChild(makePath("M0 0h24v24H0z", "none", "none"));
  svg.appendChild(makePath("M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-12", false, "#ececec"));
  return svg;
})();

export const rain = (() => {
  const svg = base("150", "#c9c9c9", "0.5");
  svg.appendChild(makePath("M0 0h24v24H0z", "none", "none"));
  svg.appendChild(makePath("M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7", false, "#f4f4f4"));
  svg.appendChild(makePath("M11 13v2m0 3v2m4 -5v2m0 3v2", "#00abfb"));
  return svg;
})();

export const snow = (() => {
  const svg = base("150", "#c9c9c9", "0.5");
  svg.appendChild(makePath("M0 0h24v24H0z", "none", "none"));
  svg.appendChild(makePath("M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7", false, "#f4f4f4"));
  svg.appendChild(makePath("M11 15v.01m0 3v.01m0 3v.01m4 -4v.01m0 3v.01", "#b8d1de", false, "1"));
  return svg;
})();

export const storm = (() => {
  const svg = base("150", "#c9c9c9", "0.5");
  svg.appendChild(makePath("M0 0h24v24H0z", "none", "none"));
  svg.appendChild(makePath("M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7", false, "#f4f4f4"));
  svg.appendChild(makePoly("13 14 11 18 14 18 12 22", "#ffd466", "1"));
  return svg;
})();

export const wind = (() => {
  const svg = base("150", "#b8d1de", "1");
  svg.appendChild(makePath("M0 0h24v24H0z", "none", "none"));
  svg.appendChild(makePath("M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24"));
  svg.appendChild(makePath("M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24"));
  svg.appendChild(makePath("M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24"));
  return svg;
})();
