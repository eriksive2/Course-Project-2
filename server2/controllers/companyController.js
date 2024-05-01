const Company = require('../models/companyModel'); 

exports.searchCompanies = async (req, res) => {
  try {
    // Extract query parameters
    const { service, radius, availableNow, certifiedOnly } = req.query;

    // Build the query
    const query = {
      // ... build your query based on the parameters
    };

    // Perform the query
    const companies = await Company.find(query).exec();

    // Send the response
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
