let turnBlack, slider, lastSlider, int1, int2;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(30, 200, 100, 1);
}

function draw() {
  if (turnBlack) {
    background(0);
    turnBlack = false;
  }
  if (lastSlider != slider.value()) {
    clearInterval(int1);
    clearInterval(int2);
    int1 = setInterval(function() {
      background(255, 0, 0);
      setTimeout(function() {
        turnBlack = true;
      }, 30);
    }, 60000 / slider.value());
    int2 = setInterval(function() {
      background(0, 255, 0);
      setTimeout(function() {
        turnBlack = true;
      }, 30);
    }, 60000 / slider.value() - 1);
  }
  lastSlider = slider.value();
}
int1 = setInterval(function() {
  background(255, 0, 0);
  setTimeout(function() {
    turnBlack = true;
  }, 30);
}, 60000 / slider.value());
int2 = setInterval(function() {
  background(0, 255, 0);
  setTimeout(function() {
    turnBlack = true;
  }, 30);
}, 60000 / slider.value() - 1);