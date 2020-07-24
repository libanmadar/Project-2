const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Test123');
    res.end();
  }

  if (req.url === '/api/surveyQuestions') {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.listen(5100);

const port = process.env.PORT || 5100;
app.listen(5100, () => console.log(`Listening on port ${port}...`));