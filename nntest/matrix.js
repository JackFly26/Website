function Matrix(rows, cols) {
  this.rows = rows;
  this.cols = cols;
  this.data = [];
  for (let i = 0; i < this.rows; i++) {
    this.data[i] = [];
    for (let j = 0; j < this.cols; j++) {
      this.data[i][j] = 0;
    }
  }
}
Matrix.prototype.fill = function(n) {
  for (let i = 0; i < this.rows; i++) {
    this.data[i] = [];
    for (let j = 0; j < this.cols; j++) {
      this.data[i][j] = n;
    }
  }
  return this;
}
Matrix.prototype.randomize = function() {
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      this.data[i][j] = Math.floor(Math.random() * 10);
    }
  }
  return this;
}
Matrix.prototype.broadcastY = function(n) {
  if (n instanceof Matrix) {
    let difference = n.rows - this.rows;
    console.log(difference);
    if (difference > 0) {
      for (let i = 0; i < difference; i++) {
        let temp = this.data[this.data.length - 1];
        this.data.push(temp);
      }
      this.rows = n.rows;
    } else {
      for (let i = 0; i < abs(difference); i++) {
        let temp = n.data[n.data.length - 1];
        n.data.push(temp);
      }
      n.rows = this.rows;
    }
  } else {
    let difference = this.rows - n;
    if (i < 0) {
      this.data.splice(n)
    } else {
      for (let i = 0; i < difference; i++) {
        let temp = this.data[this.data.length - 1];
        this.data.push(temp);
      }
    }
  }
}
Matrix.prototype.broadcastX = function(n) {
  if (n instanceof Matrix) {
    let difference = n.cols - this.cols;
    if (difference > 0) {
      for (let i = 0; i < difference; i++) {
        for (let i = 0; i < this.rows; i++) {
          this.data[i].push(this.data[i].slice(-1)[0]);
        }
      }
      this.cols = n.cols;
    } else {
      for (let i = 0; i < abs(difference); i++) {
        for (let i = 0; i < n.rows; i++) {
          n.data[i].push(n.data[i].slice(-1)[0]);
        }
      }
      n.cols = this.cols;
    }
  } else {
    let difference = this.cols - n;
    if (difference < 0) {
      for (let i = 0; i < this.rows; i++) {
        this.data[i].splice(n);
      }
    } else {
      for (let i = 0; i < difference; i++) {
        for (let i = 0; i < this.rows; i++) {
          this.data[i].push(this.data[i].slice(-1)[0]);
        }
      }
    }
  }
}
Matrix.prototype.broadcast = function(n) {
  if (n.rows != this.rows && n.cols != this.cols) {
    this.broadcastX(n);
    this.broadcastY(n);
  } else if (n.rows != this.rows) {
    this.broadcastY(n);
  } else if (n.cols != this.cols) {
    this.broadcastX(n);
  }
  return this;
}
Matrix.prototype.add = function(n) {
  if (n instanceof Matrix) {
    this.broadcast(n);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] += n.data[i][j];
      }
    }
  } else {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] += n;
      }
    }
  }
  return this;
}
Matrix.prototype.log = function() {
  console.table(this.data);
}
Matrix.multiply = function(a, b, dot = true) {
  if (dot) {
    m1.broadcastX(a.rows);
    let result = new Matrix(a.rows, b.cols);
    for (let i = 0; i < result.rows; i++) {
      for (let j = 0; j < result.cols; j++) {
        let sum = 0;
        for (let k = 0; k < a.cols; k++) {
          sum += a.data[i][k] * b.data[k][j];
        }
        result.data[i][j] = sum;
      }
    }
    return result;
  } else {
    a.broadcast(b);
    for (let i = 0; i < a.rows; i++) {
      for (let j = 0; j < a.cols; j++) {
        a.data[i][j] *= b.data[i][j];
      }
    }
  }
}
Matrix.prototype.multiply = function(n) {
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      this.data[i][j] *= n;
    }
  }
  return this;
}
Matrix.prototype.map = function(fn) {
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      let val = this.data[i][j];
      this.data[i][j] = fn(val);
    }
  }
  return this;
}
Matrix.prototype.transpose = function() {
  let result = new Matrix(this.cols, this.rows);
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      result.data[j][i] = this.data[i][j];
    }
  }
  return result;
}
