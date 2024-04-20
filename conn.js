const mongoose = require('mongoose');

const DB = "mongodb+srv://rajsah2209:PTvFZctru4NULlaN@cluster0.tts7zo6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(DB).then(() => {
    console.log(`connection successful`);
}).catch((err) => console.log(`no connection ${err}`));
