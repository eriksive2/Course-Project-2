const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  seller_picture: { type: String, required: true },
  seller_name: { type: String, required: true },
  seller_website: { type: String, required: true },
  seller_email: { type: String, required: true },
  seller_phonenumber: { type: String, required: true },
  seller_address: { type: String, required: true },
  pincode: { type: String, required: true },
  seller_summary: { type: String, required: true },
  seller_partners: [{ type: String }],
  type: { type: String, required: true, enum: ['contractor', 'renovator'] },
  rating: { type: Number, required: true },
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
