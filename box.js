var spinningbox = function(sketch) {
  var osc, fft;
  sketch.setup = function() {
    var canvas = sketch.createCanvas(500, 500, sketch.WEBGL);
    canvas.parent('box')
    sketch.camera(-100, -100, 100, 0, 0, 0, 0, 1, 0);
    sketch.angleMode(sketch.DEGREES);
    sketch.background(0);
    osc = new p5.Oscillator();
    fft = new p5.FFT();
    osc.setType("sine");
    osc.amp(0);
  }
  let angle = 0;
  let i = 0;
  let sound = false;
  sketch.draw = function() {
    if ($("#box").css('display') != 'none') {
      if (!sound) {
        osc.start();
        sound = true;
      }
      let waveform = fft.waveform();
      var locX = sketch.mouseX - sketch.width / 2;
      var locY = sketch.mouseY - sketch.height / 2;
      waveform[i] = sketch.int(sketch.map(waveform[i], -1, 1, -50, 50));
      sketch.translate(0, waveform[i], 0);
      osc.amp(sketch.map(sketch.mouseX, 0, sketch.width, 0, 0.8, true));
      osc.freq(sketch.map(sketch.mouseX, 0, sketch.width, 440, 880, true));
      sketch.background(0);
      angle += sketch.map(sketch.mouseX, 0, sketch.width, 0, 1, true);
      sketch.pointLight(250, 250, 250, locX, locY, 50);
      sketch.rotateX(angle);
      sketch.box(sketch.map(sketch.mouseX, 0, sketch.width, 50, 100, true));
      if (i >= waveform.length - 1) {
        i = 0
      } else {
        i++
      }
    }
  }
}
var yourp5 = new p5(spinningbox);
