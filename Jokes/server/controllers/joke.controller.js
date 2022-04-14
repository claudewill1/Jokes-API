
const Joke = require("../models/joke.model")


module.exports = {


    findAllJokes: (req, res) => {
        Joke.find({}) 
            .then((allJokes) => {
                console.log(allJokes)
                res.json(allJokes)
            })
            .catch((err) => {
                console.log("findAllJokes has failed!")
                console.log(err)
                res.json(err)
            })
    },

    createNewJoke: (req, res) => {
        Joke.create(req.body) 
            .then((newJoke) => {
                
                res.json(newJoke)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },


    findOneJoke: (req, res)=> {
        
        Joke.findOne({ _id: req.params.id }) //the params id MUST MATCH how we write it in our routes!!!
            .then((oneJoke) => {
                console.log(oneJoke)
                res.json(oneJoke)
            })
            .catch((err) => {
                console.log(err)
                console.log("findOneJoke has failed!")
                res.json(err)
            })
    },
    deleteOneJoke: (req, res)=>{
        Joke.findByIdAndRemove({ _id: req.params.id })
            .then((deletedJoke) => {
                console.log(deletedJoke)
                res.json(deletedJoke)
            })
            .catch((err) => {
                console.log(err)
                console.log("deleteOneJoke has failed!")
                res.json(err)
            })
    },


    updateJoke: (req, res) => {
        //This Mongoose query requires both a parameter AND body from the request!
        Joke.findOneAndUpdate({ _id: req.params.id },
            req.body,
            //These options return a new doc and allow schema valids to run on PUT req
            { new: true, runValidators: true }
        )
            .then((updatedJoke) => {
                console.log(updatedJoke)
                res.json(updatedJoke)
            })
            .catch((err) => {
                console.log(err)
                console.log("updateJoke has failed!")
                res.status(400).json(err)  //See above (explained in create)
            })

    }
}