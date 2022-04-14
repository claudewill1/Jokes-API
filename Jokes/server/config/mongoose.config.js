const mongoose = require("mongoose")
const jokeDB = 'jokeDB'
mongoose.connect(`mongodb://localhost/${jokeDB}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log(`You are onnected to the database called ${jokeDB}`)
    })
    .catch((err)=>{
        console.log(`You had a problem connecting to the {jokeDB}. Here is your error:`,err)
    })