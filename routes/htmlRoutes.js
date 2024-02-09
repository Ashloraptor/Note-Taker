const path = require('path');
const router = require('express').Router();


//Dedicated URL
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

//All other paths
router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html')) 
);

module.exports = router;