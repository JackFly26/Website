let turnBlack;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (turnBlack) {
    background(0);
    turnBlack = false;
  }
}
setInterval(function() {
  background(255, 0, 0);
  setTimeout(function() {
    turnBlack = true;
  }, 30);
}, 60000 / 100);
setInterval(function() {
  background(0, 255, 0);
  setTimeout(function() {
    turnBlack = true;
  }, 30);
}, 60000 / 99);