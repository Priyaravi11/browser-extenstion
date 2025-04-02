const tf = require("@tensorflow/tfjs-node");
const fs = require("fs");
const path = require("path");

// Path to save the trained model
const MODEL_PATH = path.join(__dirname, "../models/pricePredictionModel");

/**
 * Trains a price prediction model using historical price data.
 * @param {Array} prices - Array of past prices
 * @returns {Promise<void>}
 */
async function trainModel(prices) {
    if (prices.length < 2) {
        throw new Error("Insufficient data to train the model.");
    }

    // Prepare training data (X: past prices, Y: next price)
    const xs = prices.slice(0, -1); // Input features
    const ys = prices.slice(1);     // Target values

    const xsTensor = tf.tensor2d(xs, [xs.length, 1]);
    const ysTensor = tf.tensor2d(ys, [ys.length, 1]);

    // Define a neural network model
    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 10, inputShape: [1], activation: "relu" }));
    model.add(tf.layers.dense({ units: 1 })); // Output layer

    model.compile({ optimizer: "adam", loss: "meanSquaredError" });

    console.log("Training the model...");
    await model.fit(xsTensor, ysTensor, { epochs: 100 });

    console.log("Model training completed. Saving model...");

    // Save the trained model
    await model.save(`file://${MODEL_PATH}`);
    console.log(`Model saved at ${MODEL_PATH}`);
}

module.exports = { trainModel };
