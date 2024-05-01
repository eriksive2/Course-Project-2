require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Company = require('./models/Company'); // Make sure the path matches your file structure
const GetInTouch = require('./models/GetInTouch'); // Ensure this model is created


const app = express();

app.use(cors({
  origin: 'http://localhost:4000'
}));

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connection established'))
.catch(err => console.error('MongoDB connection error:', err));


app.get('/api/get-in-touch', async (req, res) => {
  try {
    // Assuming your GetInTouch model represents documents in a collection where contact information is stored
    const contacts = await GetInTouch.find({});
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ message: 'Error fetching contacts' });
  }
});

app.post('/api/get-in-touch', async (req, res) => {
  try {
    const newContact = new GetInTouch({
      fullName: req.body.fullName,
      email: req.body.email,
      message: req.body.message
    });
    await newContact.save();
    res.status(201).json({ message: 'Contact info saved' });
  } catch (error) {
    console.error('Error saving contact info:', error);
    res.status(500).json({ message: 'Error saving contact info' });
  }
});


app.get('/api/companies', async (req, res) => {
  try {
    const { searchRadius, sortBy, isAvailableNow, isCertified, serviceType } = req.query;


    const query = {};
    

    if (serviceType) {
      query.usertype = serviceType; // Ensure this matches exactly with the database
    }

    const companies = await Company.find(query);
    

    res.json(companies);
  } catch (error) {
    console.error('Error fetching companies:', error);
    res.status(500).send(error);
  }
});


const PORT = process.env.PORT || 4002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
