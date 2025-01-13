const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const userRoute = require('./src/routes/userRoutes')

dotenv.config()

const app = express()
const port = 7000

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use(userRoute)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})