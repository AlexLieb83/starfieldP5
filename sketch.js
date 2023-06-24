let stars = [];
let factor = 100;
let speedSlider;

function setup() {
  createCanvas(640, 360);
  speedSlider = createSlider(0, 20, 5, 0.1);
  for (let i = 0; i < 500; i++) {
    stars[i] = createVector(
      random(-width * factor, width * factor),
      random(-height * factor, height * factor),
      random(width),
    );
    stars[i].prevZ = stars[i].z;
  }
}

function draw() {
  background(0);
  fill(255);
  noStroke();
  translate(width / 2, height / 2);

  for (let star of stars) {
    let x = star.x / star.z;
    let y = star.y / star.z;
    let prevX = star.x / star.prevZ;
    let prevY = star.y / star.prevZ;

    let d = map(star.z, 0, width, 10, 1);
    circle(x, y, d);

    stroke(255);
    line(x, y, prevX, prevY);
    star.prevZ = star.z;
    star.z -= speedSlider.value();

    if (star.z < 1) {
      random(-width * factor, width * factor);
      random(-height * factor, height * factor);
      star.z = 400;
      star.prevZ = 400;
    }
  }
}
