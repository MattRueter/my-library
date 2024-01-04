const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send("Hello My Library")
});

app.listen(port, () => {
    console.log(`My Library server listening on port ${port}`)
});
