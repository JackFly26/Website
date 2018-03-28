var osc, fft;
function setup() {
  var canvas = createCanvas(500, 500, WEBGL);
  camera(-100, -100, 100, 0, 0, 0, 0, 1, 0);
  angleMode(DEGREES)
  background(0)
  osc = new p5.Oscillator();
  fft = new p5.FFT();
  osc.setType("sine");
  osc.start();
}
let angle = 0;
let i = 0;
function draw() {
  let waveform = fft.waveform();
  var locX = mouseX - width / 2;
  var locY = mouseY - height / 2;
  waveform[i] = int(map(waveform[i], -1, 1, -50, 50));
  translate(0, waveform[i], 0);
  osc.amp(map(mouseX, 0, width, 0, 0.8, true));
  osc.freq(map(mouseX, 0, width, 440, 880, true));
  background(0);
  angle += map(mouseX, 0, width, 0, 1, true);
  pointLight(250, 250, 250, locX, locY, 50);
  rotateX(angle);
  box(map(mouseX, 0, width, 50, 100, true));
  if (i >= waveform.length - 1) {
    i = 0
  } else{
    i++
  }
}
