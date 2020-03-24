const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000
const app = express()

const pubDir = path.join(__dirname, '../pub')
app.use(express.static(pubDir))



app.listen(port)
