const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const morgan = require('morgan');
const port = process.env.PORT

//middleware
app.use(morgan("tiny"));

//routes
app.get('/', (req, res) => {
    res.send("Hello My Library")
});

//server
app.listen(port, () => {
    console.log(`My Library server listening on port ${port}`)
});
