const express = require('express')
// const colors = require('colors')
// const morgan = require('morgan')
// const dotenv = require('dotenv')
const PORT = process.env.PORT || 3500;

// reat Object 
const app = express()

// Listener Port 
app.listen(port, () => {
    console.log(`Server Running on Port ${PORT}`)
})

// Middlewares 
// app.us(express.json())
// app.use(morgan('dev'))

// Routes 
// app.get('/', (req, res) => {
//     res.status(200).send({
//         message: 'server running',
//     })
// })

// Port 

