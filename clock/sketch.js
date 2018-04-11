let p;
let first;
let cnv;
let nums;

function setup() {
  cnv = createCanvas(400, 400);
  cnv.parent('canvas')
  cnv.mouseOver(function() {
    nums = true;
  });
  cnv.mouseOut(function() {
    nums = false;
  })
  //p = createP();
}

let spacing = 22;
let current;

function draw() {
  translate(width / 2, height / 2);
  rotate(-HALF_PI);
  background(10, 15, 68);
  var h = hour() % 12;
  var m = minute();
  var s = new Date().getMilliseconds() / 1000 + second();
  strokeWeight(10);
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
  if (h === 0) {
    h = 12;
  }
  current = ('0' + h).slice(-2) + ":" + ('0' + m).slice(-2) + ":" + ('0' + floor(s)).slice(-2);
  rotate(HALF_PI);
  strokeWeight(1);
  textSize(32);
  text(current, 0, 0);
  if (nums === true) {
    for (let i = 0; i < 12; i++) {
      let a = i * (TWO_PI / 12) - HALF_PI;
      let script = i;
      if (i === 0) {
        script = 12;
      }
      textSize(24)
      text(script, (width - (5 * spacing)) / 2 * cos(a), (height - (5 * spacing)) / 2 * sin(a));
    }
  }
}
