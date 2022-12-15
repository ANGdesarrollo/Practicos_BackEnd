import Router from 'express';
import {saveCart, getAllCarts, updateCart} from "../controllers/cart.js";
const router = Router();

router.get('/', getAllCarts);
router.post('/', saveCart);
router.put('/', updateCart);

export default router;
