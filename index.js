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
  res.send('restaurant has the following ratings:');
});

//taste_rating,service_rating,parking_rating,speedOfOrderPreparation_rating,restaurant_name,address
///:parking_rating/:speedOfOrderPreparation_rating/:restaurant_name/:address
app.get('/api/surveyData/:taste_rating/:service_rating', (req, res) => {
  res.send(req.params);
});

//reading the value of an environment variable termed 'PORT'
//5100 is an arbitrary number. I'm not 100% sure why process.env is used, but my perception is that process.env tells the server, 'if port 5100 is in use, use an alternate available port. 
const port = process.env.PORT || 5100;
app.listen(5100, () => console.log(`Listening on port ${port}...`));



