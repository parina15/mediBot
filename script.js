// script.js
const chatInput = document.querySelector('#chat-input');
const sendBtn = document.querySelector('#send-btn');
const chatOutput = document.querySelector('#chat-output');

// Load the machine learning model
async function loadModel() {
    const model = await tf.loadLayersModel('https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json');
    return model;
}

// Generate a response to a user query
async function generateResponse(query) {
    const model = await loadModel();
    const input = tf.tensor2d([query], [1, 1]);
    const output = model.predict(input);
    const response = output.dataSync()[0];
    return response;
}

// Handle user input
async function handle