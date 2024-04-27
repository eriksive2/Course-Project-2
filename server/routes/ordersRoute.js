const router = require('express').Router();
let orderModel = require('../models/ordersModel');

router.route('/').get((req, res) => {
    orderModel.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const itemsToAdd = req.body; // Assuming the request body is an array of items to add
    const addPromises = [];

    itemsToAdd.forEach(item => {
        const { user_id, designer, product_id, total_cost, numBed, numBath, q, tags } = item;
        const AddtoOrders = new orderModel({ user_id, designer, product_id, total_cost, numBed, numBath, q, tags });
        addPromises.push(AddtoOrders.save());
    });

    Promise.all(addPromises)
        .then(() => res.json('Items added to Orders!'))
        .catch(err => res.status(400).json('Error adding items to Orders: ' + err));
});

module.exports = router;
