/*
    host + /api/products
 */

const { Router } = require('express');
const router = Router();
const { getAllProducts, getProductById, postProduct, updateProduct, deleteProduct} = require('../controllers/controllerProducts');

router.get('/:id', getProductById );
router.post('/', postProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;

