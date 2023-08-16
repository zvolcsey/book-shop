import express =  require('express')
import dotenv = require('dotenv')

const app = express()

dotenv.config()

app.use(express.json())

app.listen(process.env.API_PORT, () => {
  console.log(`Api running on port ${process.env.API_PORT}`)
})
