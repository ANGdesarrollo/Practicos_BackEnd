import Router from 'express';
import {saveProduct, getAllProducts, updateProduct, deleteProduct, getById} from "../controllers/products.js";
import {verifyRole} from "../middlewares/adminVerify.js";
const router = Router();

router.get('/' ,getAllProducts);
router.get('/:id', getById);
router.post('/', verifyRole, saveProduct);
router.put('/:id', verifyRole, updateProduct);
router.delete('/:id', verifyRole, deleteProduct);

export default router;
