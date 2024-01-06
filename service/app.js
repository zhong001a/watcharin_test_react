const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())


app.use(cors())
app.get('/first', (req, res) => {
    res.json({
      msg: 'first call...'
    })
  })


const movieRoute = require('./route/movieRoute')

app.use('/api/v1/movie', movieRoute);

const port = 8000
app.listen(port, async () => {
    console.log(`Server running at http://localhost:${port}/`)
  })

