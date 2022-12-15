import admin from "firebase-admin";
import log from '../../utils/logger.js';
import { certFirebase } from "../mongoDB/certificationFirebase.js";

const dbConnectionFirebase = () => {
    try {
        admin.initializeApp({
            credential: admin.credential.cert(certFirebase)
        });
        log.info('Firebase online')
    } catch(err)  {
        log.info(err)
        throw new Error('Error to initialize Firebase');
    }
}

export default dbConnectionFirebase
