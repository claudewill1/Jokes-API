const express = require("express")
const cors = require("cors")
const app = express()

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(cors({
    origin: 'http://localhost:3000'
}))

require('./routes/joke.routes')(app)
require('./config/mongoose.config')

const myPort = 8000
app.listen(myPort,()=>console.log(`You are connected to port ${myPort}`))