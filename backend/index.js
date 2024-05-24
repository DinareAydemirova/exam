const express = require('express')
const router = require('./src/routes/flowerRoute')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
require("./src/config/db")
const cors = require('cors')

app.use(bodyParser.json())
app.use("/", router)
app.use(cors())

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})