const express = require('express');
const companyController = require('../controllers/companyController');
const router = express.Router();


// Route for getting all companies
router.get('/', companyController.getAllCompanies);

// Route for creating a new company
router.post('/', companyController.createCompany);

// Route for updating a company
router.put('/:id', companyController.updateCompany);

// Route for deleting a company
router.delete('/:id', companyController.deleteCompany);


module.exports = router;
