const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Chatbot endpoint
app.post('/chat', (req, res) => {
    const userMessage = req.body.message;

    // Example response logic
    let botResponse = "I didn't understand that.";
    if (userMessage.toLowerCase().includes('hello')) {
        botResponse = "Hello! How can I assist you with the live stream?";
    } else if (userMessage.toLowerCase().includes('stream')) {
        botResponse = "The live stream is available above. Let me know if you face any issues.";
    }

    res.json({ response: botResponse });
});

app.listen(3000, () => console.log('Chatbot server running on port 3000'));
