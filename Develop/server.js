//Import express package
const express = require('express');
const path = require('path');
const noteData = require('./db/db.json');
const api = require('./index.js');

//Initialize app variable by setting it to value of express()
const app = express();
const PORT = process.env.port || 3001;

// res.json() allows us to return JSON instead of a buffer, string, or static file
//app.get('/api/notes', (req, res) => res.json(noteData));
app.use(express.json());
app.use('/api', api);

app.get('/', (req, res) => res.send('Navigate to /notes'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

//GET Route for main page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

//404 page catch
app.get('*', (res, req) =>
res.sendFile(path.join(__dirname, 'public/pages/404.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);