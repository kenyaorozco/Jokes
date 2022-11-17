// Import mongoose with our DB w/ mongo
const mongoose = require("mongoose");


// create a schem - this will connect to the DB 
const JokesSchema = new mongoose.Schema({
    setup: String,
    punchline: String,
},{timestamps:true})

// Create const to connect to our DB therefore we can input data into our DB
const Joke = mongoose.model("Joke", JokesSchema)

// export the module, access it in our server.js
module.exports = Joke;