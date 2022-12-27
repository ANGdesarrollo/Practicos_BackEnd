import { Router } from 'express';
import {fakerProducts} from "../controllers/faker.js";
const router = Router();

router.get('/', fakerProducts);

export default router;
