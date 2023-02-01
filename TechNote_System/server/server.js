const express = require('express')
const colors = require('colors')
const morgan = require('morgan')
const dotenv = require('dotenv')

// reat Object 
const app = express()

// Middlewares 
app.us(express.json())
app.use(morgan('dev'))

// Routes 
app.get('/', (req, res) => {
    res.status(200).send({
        message: 'server running',
    })
})

// Port 
const port = process.env.PORT || 8080

// Listener Port 
app.listen(port, () => {
    console.log(`Server Running in ${process.env.NODE_MODE} Moding `)
})
