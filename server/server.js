// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser'); // Import bodyParser

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.urlencoded({ extended: true })); // Use bodyParser for urlencoded data

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/CourseProject', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const cartRouter = require('./routes/addCart');
app.use('/addCart', cartRouter);

const structureRoutes = require('./routes/structureRoutes');
app.use('/api/Structures', structureRoutes);

// Import and use ordersRoute
const ordersRouter = require('./routes/ordersRoute');
app.use('/orders', ordersRouter);


// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
