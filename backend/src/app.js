const express = require('express');
const bodyParser = require('body-parser');
const joinRouter = require('./routes/join.js');
const waiverRouter = require('./routes/waiver.js');


const app = express();

app.use(bodyParser.json());
app.use('/api/join', joinRouter);
app.use('/api/waiver', waiverRouter);


// Status route
app.get('/status', (req, res) => {
    res.status(200).send('Server is running successfully!');
});



// Default route
app.get('/', (req, res) => {
    res.status(200).send(`Server is running.`);
});

module.exports = app;