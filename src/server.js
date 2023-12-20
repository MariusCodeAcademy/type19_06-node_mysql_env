const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mysql = require('mysql2/promise');
const app = express();

const PORT = 3000;

// Middleware
app.use(morgan('dev'));

app.get('/', function (req, res) {
  res.send('Hello World');
});

// GET - /api/posts - grazins visus postus
app.get('/api/posts', (req, res) => {
  // prisijungti prie DB

  // atlikti veikma
  // grazinti duomenis
  // atsijungti nuo DB
  res.json('all posts');
});

app.listen(PORT, () =>
  console.log(`Server runing on http://localhost:${PORT}`)
);
