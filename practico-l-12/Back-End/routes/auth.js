import { Router } from 'express';
import {auth} from "../controllers/auth.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
export const routerAuth = Router();

routerAuth.post('/', authMiddleware,  auth)

