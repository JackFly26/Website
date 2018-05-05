function Matrix(rows, cols) {
  this.rows = rows;
  this.cols = cols;
  this.matrix = [];
  for (let i = 0; i < this.rows; i++) {
    this.matrix[i] = [];
    for (let j = 0; j < this.cols; j++) {
      this.matrix[i][j] = 0;
    }
  }
}
Matrix.prototype.fill = function(n) {
  for (let i = 0; i < this.rows; i++) {
    this.matrix[i] = [];
    for (let j = 0; j < this.cols; j++) {
      this.matrix[i][j] = n;
    }
  }
  return this;
}
Matrix.prototype.randomize = function() {

  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      this.matrix[i][j] = Math.floor(Math.random() * 10);
    }
  }
  return this;
}
Matrix.prototype.broadcastY = function(n) {
  let difference = n.rows - this.rows;
  if (difference > 0) {
    for (let i = 0; i < difference; i++) {
      let temp = this.matrix[this.matrix.length - 1];
      this.matrix.push(temp);
    }
    this.rows = n.rows;
  } else {
    for (let i = 0; i < abs(difference); i++) {
      let temp = n.matrix[n.matrix.length - 1];
      n.matrix.push(temp);
    }
    n.rows = this.rows;
  }
}
Matrix.prototype.broadcastX = function(n) {
  let difference = n.cols - this.cols;
  if (difference > 0) {
    for (let i = 0; i < difference; i++) {
      for (let i = 0; i < this.rows; i++) {
        this.matrix[i].push(this.matrix[i][this.matrix[i].length - 1]);
      }
    }
    this.cols = n.cols;
  } else {
    for (let i = 0; i < abs(difference); i++) {
      for (let i = 0; i < n.rows; i++) {
        n.matrix[i].push(n.matrix[i][n.matrix[i].length - 1]);
      }
    }
    n.cols = this.cols;
  }
}
Matrix.prototype.broadcast = function(n) {
  if (n.rows != this.rows && n.cols != this.cols) {
    this.broadcastY(n);
    this.broadcastX(n);
  } else if (n.rows != this.rows) {
    this.broadcastY(n);
  } else if (n.cols != this.cols) {
    this.broadcastX(n);
  }
  return this;
}
Matrix.prototype.add = function(n) {
  if (n instanceof Matrix) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.matrix[i][j] += n.matrix[i][j];
      }
    }
  } else {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.matrix[i][j] += n;
      }
    }
  }
  return this;
}
Matrix.prototype.multiply = function(n) {
  if (n instanceof Matrix) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.matrix[i][j] *= n.matrix[i][j];
      }
    }
  } else {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.matrix[i][j] *= n;
      }
    }
  }
  return this;
}
