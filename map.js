var sketch = function(p) {
  p.setup = function() {
    var canvas = p.createCanvas(500, 500);
    p.background(255);
  }
  let noise;
  var xoff = 0;
  var yoff = 0;
  var x = 0;
  var y = 0;
  p.draw = function() {
    if ($("#map").css("display") != "none") {
      for (let i = 0; i < p.width; i++) {
        noise = p.color(p.map(p.noise(xoff, yoff), 0, 1, 0, 255));
        xoff += 0.01;
        p.stroke(noise);
        p.fill(noise);
        console.log(y);
        p.ellipse(x, y % p.height, 1);
        x++;
      }
      x = 0;
      y++;
      xoff = 0;
      yoff += 0.01;
    }
  }
}
var whatp5 = new p5(sketch, 'map');
// var sketch = function(p){
//   p.setup = function(){
//     var canvas = p.createCanvas(100,100);
//     p.background(255);
//   }
//   let noise;
//   var xoff = 0;
//   var yoff = 0;
//   p.draw = function(){
//     for(let i = 0; i < p.width; i++){
//       noise = p.color(p.map(p.noise(xoff, yoff), 0, 1, 0, 255));
//       xoff += 1;
//       p.stroke(noise);
//       p.fill(noise);
//       p.point(xoff, yoff);
//     }
//     xoff = 0;
//     yoff += 1;
//   }
// }
// var whatp5 = new p5(sketch, 'map');
// // var s = function( sketch ) {
// //
// //   var x = 100;
// //   var y = 100;
// //
// //   sketch.setup = function() {
// //     sketch.createCanvas(200, 200);
// //   };
// //
// //   sketch.draw = function() {
// //     sketch.background(0);
// //     sketch.fill(255);
// //     sketch.rect(x,y,50,50);
// //   };
// // };
// //
// // var myp5 = new p5(s, 'map');
