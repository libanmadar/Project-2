const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('test345');
});

const surveyQuestions = [
  { id: 1, rating: 'taste_rating' },
  { id: 2, rating: 'service_rating' },
  { id: 3, rating: 'parking_rating' }
];

app.get('/api/surveyQuestions', (req, res) => {
  res.send(surveyQuestions);
});


// ...'/api/surveyQuestions/:id'... should refer to /api/surveyQuestions/:taste_rating/:service_rating/:parking_rating/:speedOfOrderPreparation_rating/:restaurant_name/:address

app.get('/api/surveyQuestions/:id', (req, res) => {
  let surveyQuestion = surveyQuestions.find(c => c.id === parseInt(req.params.id));
  //object not found: if survey question is not found on surver, the response 404 not found is returned. 
  if (!surveyQuestion) res.status(404).send('No matching survey question found.');
  res.send(surveyQuestion);
});

//reading the value of an environment variable termed 'PORT'
//5100 is an arbitrary number. I'm not 100% sure why process.env is used, but my perception is that process.env tells the server, 'if port 5100 is in use, use an alternate available port. 
const port = process.env.PORT || 5100;
app.listen(5100, () => console.log(`Listening on port ${port}...`));



