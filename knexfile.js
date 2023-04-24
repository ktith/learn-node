require('dotenv').config();
module.exports = {
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  
  development: {
    client: 'mysql',
    connection: {
      // host: 'localhost',
      // user: 'myuser',
      // password: 'mypassword',
      // database: 'mydatabase'
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    }
  }
}
