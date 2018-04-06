//let inp;
let slider;
let obj = [];
let yeet;
let script = [];
let load = false;

function loaded(result) {

  script = split(result[0], " ");
  console.log(script.length);
  for (var i = 0; i < script.length; i++) {
    obj.push(new Text(i));
  }
  load = true;
}

function error(err) {
  console.log(err);
}

function percent(percent) {
  console.log(percent);
}

function setup() {

  loadStrings("entire_bee_movie_script.txt", loaded, error, percent);
  createCanvas(400, 400);
  //inp = createInput('yeet')
  slider = createSlider(12, 72, 72, 10);

  textFont('Comic Sans MS');
}

function draw() {
  if (loaded) {
    textSize(slider.value());
    background(random(255), random(255), random(255))
    //console.log(yeet);
    for (let i = 0; i < obj.length; i++) {
      obj[i].update(script[i], height / 2);
      obj[i].x = obj[i].getX(i);
    }
  }
}

function Text(i) {
  var offset = 0;
  var x = 0;
  // this.load = function(){
  //   x = this.getX(i);
  // }
  this.update = function(val, y) {
    fill(random(255), random(255), random(255));
    text(val, this.x + offset, y);
    //console.log(x);
    offset--;
  }
  this.getX = function(value) {
    if (value != 0) {
      return textWidth(script[value - 1]) + 10 + this.getX(value - 1);
    } else {
      return 0;
    }
  }
}
