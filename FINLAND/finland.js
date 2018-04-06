let scl, limit, moosic, x;

function preload() {
  moosic = loadSound('United_States_Navy_Band_-_Maamme.ogg.mp3')
}

function setup() {
  var cnv = createCanvas(720, 440);
  cnv.parent('parent');
  background(0);
  noStroke();
  scl = width / 18;
  limit = width / 18;
  moosic.play();
  moosic.loop();
}

function draw() {
  background(0);
  x += 0.1;
  scl = map(sin(x), 0, 1, 0, limit);
  fill(255);
  rect(0, 0, scl * 18, scl * 11);
  fill(0, 0, 255);
  rect(0, 4 * scl, scl * 18, 3 * scl);
  rect(scl * 5, 0, scl * 3, scl * 11);
}
