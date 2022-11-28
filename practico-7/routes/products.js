/*
    host + /api/products
 */

const { Router } = require('express');
const router = Router();
const { getProduct, postProduct, updateProduct, deleteProduct, allProducts } = require('../controllers/controllerProducts');
const { corsOptions, cors } = require('../server/server');

router.get( '/', cors(corsOptions) , allProducts);
router.get('/:id', cors(corsOptions) , getProduct );
router.post('/', cors(corsOptions) , postProduct);
router.put('/:id', cors(corsOptions) ,updateProduct);
router.delete('/:id', cors(corsOptions) , deleteProduct);

module.exports = router;

