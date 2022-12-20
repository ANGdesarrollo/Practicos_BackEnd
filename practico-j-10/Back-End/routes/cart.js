import Router from 'express';
import {saveCart, getAllCarts, updateCart, deleteCart, getCartByID, deleteProductInCart, addProductToCart} from "../controllers/cart.js";
const router = Router();

router.get('/', getAllCarts);
router.get('/:id', getCartByID)
router.post('/', saveCart);
router.post('/:id/products/:id_prod', addProductToCart);
router.put('/:id', updateCart);
router.delete('/:id', deleteCart);
router.delete('/:id/products/:id_prod', deleteProductInCart)

export default router;
