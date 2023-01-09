import { Router } from 'express';
import {fakerProducts} from "../controllers/faker.js";
import {authMiddleware} from "../middlewares/authMiddleware.js";
export const routerFaker = Router();

routerFaker.get('/', authMiddleware, fakerProducts);

