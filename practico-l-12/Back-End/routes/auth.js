import { Router } from 'express';
import { auth } from "../controllers/auth.js";

export const routerAuth = Router();

routerAuth.post( '/',  auth )

