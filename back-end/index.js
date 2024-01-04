const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');


dotenv.config();
const port = process.env.PORT
const app = express();
const store = new session.MemoryStore();


//middleware
app.use(cors())
app.use(express.json())
app.use(morgan("tiny"));


//routes
app.get('/', (req, res) => {
    res.send("Hello My Library")
});


//server
app.listen(port, () => {
    console.log(`My Library server listening on port ${port}`)
});
