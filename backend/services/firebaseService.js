const tf = require("@tensorflow/tfjs");

exports.predictPrice = (priceHistory) => {
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

  const inputTensor = tf.tensor2d(priceHistory, [priceHistory.length, 1]);
  return model.predict(inputTensor);
};
