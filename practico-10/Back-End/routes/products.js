import Router from 'express';
import {saveProduct, getAllProducts, updateProduct, deleteProduct} from "../controllers/products.js";
const router = Router();

router.get('/', getAllProducts);
router.post('/', saveProduct);
router.put('/', updateProduct);
router.delete('/', deleteProduct);

export default router;
