/*
 Routes of Products
 host + /api/products
 */

const { Router } = require('express');
const router = Router();
const { showProducts } = require('../controllers/products');

router.get('/:id', showProducts);

module.exports = router;
