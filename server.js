//Import express package
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Import built-in Node.js package 'path' to resolve path of files that are located on the server
const path = require('path');

// Initialize an instance of Express.js
const app = express();

// Specify on which port the Express.js server will run
const PORT = process.env.port || 3001;

// Static middleware pointing to the public folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


//404 page catch
app.get('*', (res, req) =>
res.sendFile(path.join(__dirname, './public/pages/404.html'))
);


app.listen(process.env.PORT || 3002
);
// app.listen(PORT, () =>
//   console.log(`App listening at http://localhost:${PORT}`)
// );