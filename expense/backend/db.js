// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root', 
  multipleStatements: true
});

const initDB = () => {
  const createDbAndTables = `
    CREATE DATABASE IF NOT EXISTS expense_db;
    USE expense_db;
    CREATE TABLE IF NOT EXISTS expenses (
      id INT AUTO_INCREMENT PRIMARY KEY,
      amount DECIMAL(10,2) NOT NULL,
      category VARCHAR(100) NOT NULL,
      date DATE NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `;

  connection.query(createDbAndTables, (err) => {
    if (err) {
      console.error("❌ Failed to initialize database:", err);
    } else {
      console.log("✅ Database and tables are ready.");
    }
  });
};

initDB();

// Export connection for queries
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'expense_db'
});

module.exports = db;
