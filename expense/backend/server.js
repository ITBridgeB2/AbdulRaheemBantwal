// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const expenseRoutes = require('./expenseRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/expenses', expenseRoutes);

app.listen(3000, () => {
  console.log('🚀 Server is running at http://localhost:3000');
});
