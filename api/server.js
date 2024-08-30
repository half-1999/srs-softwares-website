// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const contactRoute = require('./routes/contact');

// // Initialize express app
// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB connection
// const MONGO_URI = 'mongodb://localhost:27017/contactFormDB'; // Replace with your MongoDB URI
// mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

// // Routes
// app.use('/api/contact', contactRoute);

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sql = require('mssql');
const contactRoute = require('./routes/contact');

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MS SQL Server connection configuration
const dbConfig = {
  user: 'ptacwebsite',          // Replace with your SQL Server username
  password: 'Ptac!!29082024',      // Replace with your SQL Server password
  server: '13.213.144.95',  // Replace with your SQL Server address
  database: 'SOFT000_PG19', // Replace with your database name
  options: {
    encrypt: false,                // Use encryption if required
    trustServerCertificate: true  // Change to false if you have a valid SSL certificate
  }
};

// Connect to the database
sql.connect(dbConfig).then(pool => {
  if (pool.connected) {
    console.log('Connected to SQL Server');
  }
}).catch(err => {
  console.error('Database connection failed:', err);
});

app.get('/', (req, res) => {
  res.send('Welcome to SRS WEBSITE API');
});

// Routes
app.use('/api/contact', contactRoute);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
