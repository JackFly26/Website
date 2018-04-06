var sketch = function(p) {
  p.setup = function() {
    var canvas = p.createCanvas(500, 100);
    canvas.parent("sine");
    p.background(0);
    p.stroke(255, 255, 255, 255);
  }
  let offset = 0;
  let x = 0;
  p.draw = function() {
    if ($("#sine").css('display') != 'none') {
      p.point(x, p.int(p.map(p.sin((x / 10 % 500) + offset), -1, 1, 0, 100)) / 2);
      x += 0.1;
      if (x == 499) {
        offset += 1;
        x = 0;
        p.clear();
        p.background(0);
      }
    }
  }
}
var ourp5 = new p5(sketch);
