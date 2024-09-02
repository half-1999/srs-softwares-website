const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sql = require('mssql');
const contactRoute = require('./routes/contact');
const careerRoute = require('./routes/career');

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MS SQL Server connection configuration
const dbConfig = {
  user: 'ptacwebsite',          
  password: 'Ptac!!29082024',     
  server: '13.213.144.95',  
  database: 'SOFT000_PG19',
  options: {
    encrypt: false,                
    trustServerCertificate: true  
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
app.use('/api/career', careerRoute);

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
