const mongoose = require('mongoose');
const URI = process.env.MONGO_ATLAS_CONNECTION || 'mongodb:localhost/Local';

mongoose.connect(URI,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;

connection.once('open', () =>{
    console.log("MongoDB connected");
});