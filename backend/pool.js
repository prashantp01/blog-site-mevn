const Pool = require('pg').Pool

const pool = new Pool({
    user: 'me' || process.env.USER,
    host: 'localhost' || process.env.HOST,
    database: 'blogs' || process.env.DATABASE,
    password: 'password' || process.env.PASSWORD,
    port: 5432,
})

module.exports = pool;
