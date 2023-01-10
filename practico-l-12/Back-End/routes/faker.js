import { Router } from 'express';
import {fakerProducts} from "../controllers/faker.js";
export const routerFaker = Router();

routerFaker.get('/', fakerProducts);

