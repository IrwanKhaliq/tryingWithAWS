require('dotenv').config()

const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/todos', (req, res) => {
  axios({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/todos'
  })
    .then(({ data }) => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
    })
})

app.listen(PORT, () => console.log(`running on port ${PORT}`))