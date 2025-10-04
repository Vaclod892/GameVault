import mysql from 'mysql'; 

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tpi2025"
});

export default conn;