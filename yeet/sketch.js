//let inp;
let slider;
let obj = [];
let yeet;
let script = [];
function preload(){
  script = loadStrings("entire_bee_movie_script.txt");
}
function setup() {
  script = split(script[0], " ");
  console.log(script);
  createCanvas(400, 400);
  //inp = createInput('yeet')
  slider = createSlider(12, 72, 72, 10);
  for(var i = 0; i < script.length; i++){
    obj.push(new Text(i));
  }
}

function draw() {

  background(random(255), random(255), random(255))
  //console.log(yeet);
  for(let i  = 0; i < obj.length; i++){
    obj[i].update(script[i], height / 2);
  }
}
function Text(i) {
  this.update = function(val, y){
    var offset = 0;
    textFont('Comic Sans MS', slider.value());
    fill(random(255), random(255), random(255));
    text(val, this.getX(i)+offset, y);
    offset++;
  }
  this.getX = function(value){
    if(value != 0){
      return textWidth(script[value - 1]) + 10 + this.getX(value - 1);
    } else{
      return 0;
    }
  }
}
