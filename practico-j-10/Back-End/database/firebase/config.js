import admin from "firebase-admin";
import log from '../../utils/logger.js';
import { certFirebase } from "./certificationFirebase.js";
import {getFirestore} from "firebase-admin/firestore";
import { config } from 'dotenv';

config({ path:'./environment/.env' });

const dbConnectionFirebase = async() => {
    try {
        if(process.env.INSTANCE === 'Firebase') {
            await admin.initializeApp({
                credential: admin.credential.cert(certFirebase)
            });
            log.info('Firebase online')
            return getFirestore();
        } else {
            return undefined
        }

    } catch(err)  {
        log.info(err)
        throw new Error('Error to initialize Firebase');
    }
}

export default dbConnectionFirebase
