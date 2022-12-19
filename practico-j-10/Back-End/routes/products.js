import Router from 'express';
import {saveProduct, getAllProducts, updateProduct, deleteProduct, getById, deleteAll} from "../controllers/products.js";
const router = Router();

router.get('/', getAllProducts);
router.get('/:id', getById);
router.post('/', saveProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.delete('/', deleteAll);

export default router;
