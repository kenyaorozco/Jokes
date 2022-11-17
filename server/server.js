const express = require ('express');
const app = express();
const PORT = 8000;
const DB = "Jokes";

//--- MIDDLEWARE ---
app.use(express.json(),express.urlencoded({extended:true}));

// ---USE TO CONNECT DB TO OUR CONFIG --
require("./config/mongoose.config")(DB)

// connect to DB FIRst THEN connect to the routes 
require("./routes/joke.routes")(app)
//  the APP invokes our function on our ROUTE controller


// ---Starts the server---
app.listen(PORT,() => {console.log(`Server up on  ${PORT}`)}) 
