function setup() {
  createCanvas(1080, 720);
}

function draw() {
  strokeWeight(0);
  if (mouseIsPressed) {
    fill(25);
  } else {
    fill(200);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
