// import controller to use the model that were created

const JokeController = require("../controllers/jokes.controller")
const Joke = require("../models/joke.model")

// JokeController is being called the WHOLE THING and the function as the 2nd param will envoke a certain function
module.exports = (app) => {
    app.get("/api/jokes",JokeController.findJokes)
    app.post("/api/new",JokeController.createJoke)
    app.get("/api/jokes/random",JokeController.randomJoke)
    app.get("/api/jokes/:id",JokeController.oneJoke)
    app.put("/api/jokes/update/:id",JokeController.updateJoke)
    app.delete("/api/jokes/delete/:id", JokeController.deleteJoke)
}
