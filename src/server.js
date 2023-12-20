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
app.get('/api/posts', async (req, res) => {
  try {
    // prisijungti prie DB
    const conn = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'type19_db',
    });
    // atlikti veikma
    const sql = 'SELECT * FROM `posts`';
    const [rows] = await conn.query(sql);
    // console.log('rows ===', rows);

    // grazinti duomenis
    res.json(rows);
    // atsijungti nuo DB
  } catch (error) {
    console.log(error);
    console.log('klaida get posts');
    res.status(500).json({
      msg: 'Something went wrong',
    });
  }
});

app.listen(PORT, () =>
  console.log(`Server runing on http://localhost:${PORT}`)
);
