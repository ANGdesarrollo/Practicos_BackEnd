/*
    host + /api/cart
 */

const { Router } = require('express');
const router = Router();
const { createCart, deleteCart, addProductToCart, productsInCart, deleteProductInCart} = require('../controllers/controllerCart');

router.post('/', createCart );
router.delete('/:id', deleteCart );
router.post('/:id/products', addProductToCart);
router.get('/:id/products', productsInCart);
router.delete('/:id/products/:id_prod', deleteProductInCart)

module.exports = router;
