let p;
let first;

function setup() {
  first = millis();
  createCanvas(400, 400);
  //p = createP();
}

let spacing = 10;
let current;

function draw() {
  translate(width / 2, height / 2);
  rotate(-HALF_PI);
  background(0);
  var h = hour() % 12;
  var m = minute();
  var s = new Date().getMilliseconds() / 1000 + second();
  strokeWeight(4);
  stroke(255, 0, 0);
  noFill();
  arc(0, 0, width - spacing, height - spacing, 0, h * TWO_PI / 12);
  stroke(0, 255, 0);
  arc(0, 0, width - 2 * spacing, height - 2 * spacing, 0, m * TWO_PI / 60);
  stroke(0, 0, 255);
  arc(0, 0, width - 3 * spacing, height - 3 * spacing, 0, s * TWO_PI / 60);
  textAlign(CENTER, CENTER);
  fill(255);
  stroke(255);
  current = ('0' + h).slice(-2) + ":" + ('0' + m).slice(-2) + ":" + ('0' + floor(s)).slice(-2);
  rotate(HALF_PI);
  strokeWeight(1);
  textSize(32);
  text(current, 0, 0);
}