const express = require('express');
require('dotenv').config();
const app = express();
const connectDB = require('./config/db');
app.use(express.json({extended: false}));

connectDB();

//Routes
app.use('/api/v1/users/', require('./routes/userRoutes'));
// app.use('/api/v1/auth/', './routes/authRoutes');
// app.use('/api/v1/contacts/', './routes/contactRoutes');


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server running on port 5000'));