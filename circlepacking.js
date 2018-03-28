
var circlepacking = function ( sketch ){
  var circles;
  var img;
  var active = false;
  sketch.startDraw = function(){
    active = true;
  }
  sketch.endDraw = function(){
    active = false;
  }

  sketch.preload = function() {
    img = sketch.loadImage("assets/kitten.jpg");
  }
  sketch.setup = function() {
    var canvas = sketch.createCanvas(600, 600);
    canvas.mouseOver(sketch.startDraw);
    canvas.mouseOut(sketch.endDraw);
    var canvasWidth = sketch.width;
    var canvasHeight = sketch.height;
    canvas.parent('circles');
    var density = sketch.displayDensity();
    sketch.pixelDensity(1);
    img.loadPixels();
    circles = [];

    console.log(img.width);
    console.log(img.height);
    console.log("pixels", img.pixels.length);
    console.log(density)
  }


  sketch.draw = function() {
    if(active == true) {
      sketch.background(0);

      var total = 10;
      var count = 0;
      var attempts = 0;

      while (count < total) {
        var newC = sketch.newCircle();
        if (newC !== null) {
          circles.push(newC);
          count++;
        }
        attempts++;
        if (attempts > 1000) {
          sketch.noLoop();
          console.log("finished");
          break;
        }
      }

      for (var i = 0; i < circles.length; i++) {
        var circle = circles[i];

        if (circle.growing) {
          if (circle.edges()) {
            circle.growing = false;
          } else {
            for (var j = 0; j < circles.length; j++) {
              var other = circles[j];
              if (circle !== other) {
                var d = sketch.dist(circle.x, circle.y, other.x, other.y);
                var distance = circle.r + other.r;

                if (d - 1 < distance) {
                  circle.growing = false;
                  break;
                }
              }
            }
          }
        }

        circle.show();
        circle.grow();
      }
    }

    sketch.newCircle = function() {
      var x = sketch.random(0, img.width);
      var y = sketch.random(0, img.height);

      var valid = true;
      for (var i = 0; i < circles.length; i++) {
        var circle = circles[i];
        var d = sketch.dist(x, y, circle.x, circle.y);
        if (d - 2 < circle.r) {
          valid = false;
          break;
        }
      }
      if (valid) {
        var index = (sketch.int(x) + sketch.int(y) * img.width) * 4;
        var r = img.pixels[index];
        var g = img.pixels[index+1];
        var b = img.pixels[index+2];
        var c = sketch.color(r,g,b);
        return new Circle(x, y, sketch.color(c));
      } else {
        return null;
      }
    }
  }
}
var myp5 = new p5(circlepacking);
