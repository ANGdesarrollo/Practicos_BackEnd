import { Router } from 'express';
import { auth, authVerification, destroySession } from "../controllers/auth.js";
import resetSession from "../middlewares/resetSession.js";

export const routerAuth = Router();

routerAuth.get('/', resetSession, authVerification)
routerAuth.get('/logout', destroySession)
routerAuth.post( '/',  auth );

