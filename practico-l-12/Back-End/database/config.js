import session from "express-session";
import MongoStore from "connect-mongo";
import { log } from "../utils/logger.js";

export const sessionMongo = () => {
    try {
        const sessionCookies = session( {
            store: MongoStore.create( {
                mongoUrl: process.env.DB_CNN_MONGO,
                mongoOptions: {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                }
            } ),
            secret: process.env.SECRET,
            resave: false,
            saveUninitialized: false,
            cookie: {
                maxAge: 60 * 1000
            }
        } )
        log.info( 'MongoDB session Online' );
        return sessionCookies
    } catch( err ) {
        log.error( err );
    }
}




