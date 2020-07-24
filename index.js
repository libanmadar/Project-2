const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('test345');
});

app.get('/the', (req, res) => {
  res.send('test678');
});

app.get('/the/thing', (req, res) => {
  res.send('test1010');
});

app.get('/api/surveyQuestions', (req, res) => {
  res.send([1, 2, 3]);
});

app.listen(5100, () => console.log('Listening on port 5100...'));



