import Router from 'express';
import {saveCart, getAllCarts, updateCart, deleteCart} from "../controllers/cart.js";
const router = Router();

router.get('/', getAllCarts);
router.post('/', saveCart);
router.put('/', updateCart);
router.delete('/', deleteCart);

export default router;
