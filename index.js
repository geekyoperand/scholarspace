const express = require('express');
const connectToMongo = require('./db');
const app = express();
const port = 5000;

connectToMongo();

app.set('view engine', 'ejs'); // Set EJS as the view engine
app.use(express.json());
app.use(express.static('public'));
app.use('/api', require('./routes/subscriptions'));

app.get('/', (req, res) => {
  res.render('index'); // Render the 'index.ejs' file
});

app.get('/data-science', (req, res) => {
  // Render the 'data-science' EJS view
  res.render('data-science');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
