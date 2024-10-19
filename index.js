const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
    app.use(cors({
        origin: 'https://votercertificate.vercel.app',
        methods: 'GET,POST',
      }));
app.use(express.json());
const PORT = process.env.PORT || 8000;

require("./conn");
app.use(require('./router/routes'));
const middleware = (req, res, next) => {
    console.log(`hello middleware`);
    next();
}
app.use(middleware);
app.get('/', (req, res) => {
    res.send('hello server');
})
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

