const mongoose = require('mongoose');
require('dotenv').config();
const devConnection = process.env.DB_STRING;
const prodConnection = process.env.DB_STRING_PROD;

// Connect to the correct environment database
if (process.env.NODE_ENV === 'production') {
    mongoose.connect(prodConnection, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to MongoDB..."))
    .catch(err => console.error("Could not connect to db", err));
} else {
    mongoose.connect(devConnection, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log("Connected to MongoDB..."))
    .catch(err => console.error("Could not connect to db", err));
}