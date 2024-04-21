const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8000;

require("./conn");
app.use(require('./router/routes'));
const middleware = (req, res, next) => {
    console.log(`hello middleware`);
    next();
}

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`${PORT} Connected`);
        });
    } catch (error) {
        console.log(error);
    }
}
start();

