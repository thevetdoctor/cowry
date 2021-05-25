const express = require('express');
const uuidv4 = require('uuid').v4;

const app = express();
const PORT = process.env.PORT || 3000;

let uuidStore;

app.get('/', (req, res) => {

    const currentTime = new Date().toISOString();
    const uuidResponse = uuidv4();
    uuidStore = { [ currentTime ]: uuidResponse, ...uuidStore };

    res.status(200).json(uuidStore)
});

app.listen(PORT, () => {
    console.log(`Server started @ port: ${PORT}`);
});