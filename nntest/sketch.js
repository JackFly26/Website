var nn = new NeuralNetwork(2, 2, 1);

function setup() {
  let input = [0, 1];
<<<<<<< HEAD
  let targets = [1]
  //Matrix.fromArray(nn.feedforward(input)).log();
=======
  noCanvas();
  let p  = createP(nn.feedforward(input));
>>>>>>> ca83e56239214aa4c8bfa1b7f7af1b918bf54ac3
}

function draw() {

}
