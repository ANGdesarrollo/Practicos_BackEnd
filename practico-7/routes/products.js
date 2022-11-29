/*
    host + /api/products
 */

const {Router} = require('express');
const router = Router();
const { getProduct, postProduct, updateProduct, deleteProduct, allProducts } = require('../controllers/controllerProducts');
const { isAdminValidator } = require('../middlewares/isAdmin');

router.get('/', allProducts);
router.get('/:id', getProduct);
router.post('/', isAdminValidator, postProduct);
router.put('/:id', isAdminValidator, updateProduct);
router.delete('/:id', isAdminValidator, deleteProduct);

module.exports = router;

