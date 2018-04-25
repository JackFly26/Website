function Circle(x, y, color) {
  this.x = x;
  this.y = y;
  this.r = 2;
  this.color = color;
  this.growing = true;

  this.grow = function() {
    if (this.growing) {
      this.r += 2;
    }
  }

  this.show = function() {
    myp5.noStroke();
    myp5.fill(this.color);
    myp5.ellipse(this.x, this.y, this.r * 2, this.r * 2);

  }

  this.edges = function() {
    return (this.x + this.r >= myp5.width || this.x - this.r <= 0 || this.y + this.r >= myp5.height || this.y - this.r <= 0)
  }
}
