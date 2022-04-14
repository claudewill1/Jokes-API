const JokeController = require('../controllers/joke.controller')

module.exports = (app) =>{
    app.get("/api/jokes",JokeController.findAllJokes)
    app.post("/api/jokes",JokeController.createNewJoke)
    app.get("/api/jokes/:id",JokeController.findOneJoke)
    app.delete("/api/jokes/delete/:id",JokeController.deleteOneJoke)
    app.put("/api/jokes/update/:id",JokeController.updateJoke)
}