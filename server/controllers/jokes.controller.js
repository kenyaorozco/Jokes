// taking calls to our DB, using the models file the schema we created will need to connect to this to our routes that will connect to our DB
const Joke = require("../models/joke.model")

// CREATE COMMANDS HERE !! 
module.exports.findJokes = (request,result) => {
    Joke.find()
        .then(allJokes => {result.json(allJokes)})
        .catch(err => result.json({message:"OOPS something went wrong", messageError : err}))
}


// create a new function that will be used as a rquest in our ROUTE
module.exports.createJoke =(request,result) =>{
    // the type of function we want 
    // using request for our body since its an input 
    Joke.create(request.body)
    .then(newJoke => result.json({joke:newJoke}))
    .catch(err => result.json({message:"OOPS something went wrong with our create Joke method", messageError : err}))
}

module.exports.oneJoke = (request,result) => {
    // trying to find an joke by it's ID 
    // the request that is being made 
    // the param in our url 
    // the ID is the var name we created in our app.get
    Joke.findOne({ _id:request.params.id })
    // after the .json we want to invoke the var we created 
    .then(oneJoke => result.json({joke:oneJoke}))
    .catch(err => result.json({message:"OOPS something went wrong ,one joke", messageError : err}))
}

module.exports.deleteJoke = (request,result) => {
    Joke.deleteOne({ _id:request.params.id}) 
        .then(remove => result.json({remove:remove}))
        .catch(err => result.json({message:"OOPS something went wrong ", messageError : err}))
}

module.exports.updateJoke = (request,result) => {
    Joke.findOneAndUpdate({_id:request.params.id},
        request.body,
        {new:true, runValdators:true}
        )
    .then(updatedJoke => result.json({joke:updatedJoke}))
    .catch(err => result.json({message:"OOPS something went wrong ", messageError : err}))
}

module.exports.randomJoke = (request,result) => {
    // aggregate is  MONGO function that is used to generate random info from our DB
    Joke.aggregate([{$sample : {size:1}}])
    .then(joke => result.json(joke))
    .catch(err => result.json({message:"OOPS something went wrong,couldn't find a random joke", messageError : err}))
}