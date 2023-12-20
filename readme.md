# Steps

1. `npm i mysql2`
2. https://www.npmjs.com/package/mysql2#using-promise-wrapper
3. `const mysql = require('mysql2/promise');`
4.

```js
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test',
});
```

5. su connection daryti uzklausa
