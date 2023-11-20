'use strict'

const express = require('express')
const app = express()
const router = require('./router')
const cors = require('cors')

const PORT = 3000
const HOST = 'localhost'

// enable cors
app.use(cors())

// handle incoming JSON data in the request body
app.use(express.json())

app.use(router)

app.listen(PORT, () => {
  console.log(`🤖 Server running @ http://${HOST}:${PORT}`)
})
