const mysql = require('mysql2/promise');
const dbConfig = require('./config');

async function getDBData(sql) {
  let conn;
  try {
    // prisijungti prie DB
    conn = await mysql.createConnection(dbConfig);
    // atlikti veikma
    const [rows] = await conn.query(sql);
    // grazinti duomenis
    return [rows, null];
  } catch (error) {
    return [null, error];
  } finally {
    // atsijungti nuo DB
    if (conn) conn.end();
  }
}

async function dbQueryWithData(sql, argArr = []) {
  let conn;
  try {
    // prisijungti prie DB
    conn = await mysql.createConnection(dbConfig);
    // atlikti veikma
    const [rows] = await conn.execute(sql, argArr);
    // grazinti duomenis
    return [rows, null];
  } catch (error) {
    return [null, error];
  } finally {
    // atsijungti nuo DB
    if (conn) conn.end();
  }
}
// const [row, err] = getDBData('SELECT * FROM `posts`');

// if (err) {
//   // klaida
// }

module.exports = {
  getDBData,
  dbQueryWithData,
};
