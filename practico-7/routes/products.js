/*
    host + /api/products
 */

const { Router } = require('express');
const router = Router();
const { getProduct, postProduct, updateProduct, deleteProduct, allProducts } = require('../controllers/controllerProducts');

router.get( '/',  allProducts);
router.get('/:id', getProduct );
router.post('/', postProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;

