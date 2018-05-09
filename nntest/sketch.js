var nn = new NeuralNetwork(2, 2, 1);

function setup() {
  let input = [0, 1];
  noCanvas();
  let p  = createP(nn.feedforward(input));
}

function draw() {

}
