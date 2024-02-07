//Import express package
const express = require('express');
const path = require('path');

//Initialize app variable by setting it to value of express()
const app = express();
const PORT = 3001;

// res.json() allows us to return JSON instead of a buffer, string, or static file
app.get('/api', (req, res) => res.json(termData));

app.get('/', (req, res) => res.notes('Navigate to /notes'));

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);