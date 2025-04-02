const tf = require("@tensorflow/tfjs-node");
const Product = require("../models/Product");

// Function to train a simple neural network for price prediction
async function trainModel(prices) {
    const xs = prices.slice(0, -1);
    const ys = prices.slice(1);

    const xsTensor = tf.tensor2d(xs, [xs.length, 1]);
    const ysTensor = tf.tensor2d(ys, [ys.length, 1]);

    // Define a simple sequential model
    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 10, inputShape: [1], activation: "relu" }));
    model.add(tf.layers.dense({ units: 1 })); // Single output neuron

    model.compile({ optimizer: "adam", loss: "meanSquaredError" });

    console.log("Training the model...");
    await model.fit(xsTensor, ysTensor, { epochs: 100 });

    console.log("Model training completed.");
    return model;
}

// Function to predict the next price based on trained model
async function predictPrice(productId) {
    try {
        const product = await Product.findById(productId);
        if (!product || product.priceHistory.length < 2) {
            throw new Error("Not enough data for prediction.");
        }

        const prices = product.priceHistory;
        const model = await trainModel(prices);

        const lastPrice = tf.tensor2d([prices[prices.length - 1]], [1, 1]);
        const prediction = model.predict(lastPrice).dataSync()[0];

        console.log(`Predicted next price: ${prediction.toFixed(2)}`);
        return prediction.toFixed(2);
    } catch (error) {
        console.error("Error in price prediction:", error.message);
        return null;
    }
}

module.exports = { predictPrice };
