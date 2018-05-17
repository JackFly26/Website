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
  this.learning_rate = 0.1;
}
NeuralNetwork.prototype.feedforward = function(inputs) {
  let input;
  if (inputs instanceof Matrix) {
    input = inputs;
  } else {
    input = Matrix.fromArray(inputs);
  }
  let hidden = Matrix.multiply(this.weights_ih, input);
  hidden.add(this.bias_h);
  hidden.map(sigmoid);
  let output = Matrix.multiply(this.weights_ho, hidden);
  output.add(this.bias_o);
  output.map(sigmoid);
  return output.toArray();
}
NeuralNetwork.prototype.train = function(inputs, answer) {
  let outputs = this.feedforward(inputs);
  outputs = Matrix.fromArray(outputs);
  let targets = Matrix.fromArray(answer);
  let output_errors = Matrix.subtract(targets, outputs);
  let who_t = Matrix.transpose(this.weights_ho);
  let hidden_errors = Matrix.multiply(who_t, output_errors);
  let output_gradient = Matrix.map(outputs, x => x * (1 - x));
  output_gradient = Matrix.multiply(output_gradient, output_errors);
  output_gradient.multiply(this.learning_rate);
  let hidden_T = Matrix.transpose(hidden);
  let weights_ho_deltas = Matrix.multiply(output_gradient, hidden_T);
  this.weights_ho.add(weights_ho_deltas);
  let hidden_gradient = Matrix.map(hidden, x => x * (1 - x));
}
