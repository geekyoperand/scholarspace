const express = require('express');
const connectToMongo = require('./db');
const app = express()
const port = 4000;

connectToMongo();

app.use(express.json())
app.use('/api', require('./routes/subscriptions'))

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })