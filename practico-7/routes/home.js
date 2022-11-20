/*
 Routes of Products
 host + /api/products
 */

const { Router } = require('express');
const router = Router();
const { renderHome } = require('../controllers/home');

router.get('/', renderHome);

module.exports = router;
