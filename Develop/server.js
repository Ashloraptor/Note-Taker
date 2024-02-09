//Import express package
const express = require('express');

// Import built-in Node.js package 'path' to resolve path of files that are located on the server
const path = require('path');

// Initialize an instance of Express.js
const app = express();

// Specify on which port the Express.js server will run
const PORT = process.env.port || 3001;

// Static middleware pointing to the public folder
app.use(express.static('public'));
//end of boilerplate code

// Create Express.js routes for default '/', '/send' and '/routes' endpoints
app.get('/', (req, res) => res.send('Navigate to /index or /notes'));

app.get('/index', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/assets/js/index.js')) //
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);
//End of example assignment 1

//Does this connect to other necessary files within the program?
// const noteData = require('./db/db.json');
// const api = require('public/assets/js/index.js');



// // res.json() allows us to return JSON instead of a buffer, string, or static file
// //app.get('/api/notes', (req, res) => res.json(noteData));
// app.use(express.json());
// //"it looks to me as though it's where the "routes" will be specified"
// app.use('/api', api);

// app.get('/', (req, res) => res.send('Navigate to /notes'));

// // GET Route for homepage
// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// );

// //GET Route for main page
// app.get('/notes', (req, res) =>
//   res.sendFile(path.join(__dirname, 'public/notes.html'))
// );

//404 page catch
app.get('*', (res, req) =>
res.sendFile(path.join(__dirname, 'public/pages/404.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);