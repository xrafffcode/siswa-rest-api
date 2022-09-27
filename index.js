const express = require('express')
const app = express()
const monggoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

// Middleware
app.use(bodyParser.json())
app.use(cors())

// import routes
const siswaRoutes = require('./routes/siswa')

// routes
app.use('/api/siswa', siswaRoutes)

// Connect to MongoDB
monggoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
let db = monggoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log('Connected to MongoDB')
})

// LISTEN TO PORT
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})