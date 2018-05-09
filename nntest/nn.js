function sigmoid(x) {
  return 1 / (1 + Math.exp(-x));
}

function NeuralNetwork(numIn, numHid, numOut) {
  this.input_nodes = numIn;
  this.hidden_nodes = numHid;
  this.output_nodes = numOut;
  this.weights_ih = new Matrix(this.hidden_nodes, this.input_nodes).randomize();
  this.weights_ho = new Matrix(this.output_nodes, this.hidden_nodes).randomize();
  this.bias_h = new Matrix(this.hidden_nodes, 1).randomize();
  this.bias_o = new Matrix(this.output_nodes, 1).randomize();
}
NeuralNetwork.prototype.feedforward = function(inputs) {
<<<<<<< HEAD
  let input;
  if (inputs instanceof Matrix) {
    input = inputs;
  } else {
    input = Matrix.fromArray(inputs);
=======
  let input
  if (!(inputs instanceof Matrix)) {
    input = Matrix.fromArray(input);
  } else {
    input = inputs;
>>>>>>> 8143aeab299ce493b95f3f4310e5cb24448ddbb0
  }
  let hidden = Matrix.multiply(this.weights_ih, input);
  hidden.add(this.bias_h);
  hidden.map(sigmoid);
  let output = Matrix.multiply(this.weights_ho, hidden);
  output.add(this.bias_o);
  output.map(sigmoid);
<<<<<<< HEAD
  return output.toArray();
}
NeuralNatwork.prototype.train = function(inputs, answer) {

=======
  return output;
>>>>>>> 8143aeab299ce493b95f3f4310e5cb24448ddbb0
}
