/*
    host + /api/products
 */

const { Router } = require('express');
const router = Router();
const { getProducts, postProduct, updateProduct, deleteProduct} = require('../controllers/controllerProducts');

router.get('/:id', getProducts );
router.post('/', postProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;

