const mongoose = require('mongoose');

const MONGODB_URL = "mongodb+srv://rajsah2209:PTvFZctru4NULlaN@cluster0.tts7zo6.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(MONGODB_URL).then(() => {
    console.log(`connection successful`);
}).catch((err) => console.log(`no connection ${err}`));
