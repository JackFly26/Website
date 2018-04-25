var sketch = function(p) {
  p.setup = function() {
    var canvas = p.createCanvas(500, 500, p.WEBGL);
    canvas.parent('map');
    canvas.parent('cubes');
    p.background(0);
    p.camera(-200, -200, 200, 0, 0, 0, 0, 1, 0);
  }
  let cubes = new Array(2).fill(new Array(5));
  p.draw = function() {
    p.box(100);
  }
}
var thep5 = new p5(sketch, 'cubes');
