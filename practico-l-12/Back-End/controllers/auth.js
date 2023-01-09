import { log } from "../utils/logger.js";

export const auth = ( req, res ) => {
    try {
        const { userAuth, password } = req.body;
        if( userAuth !== 'matias@gmail.com' || password !== '123' ) {
            return res.json( { status: false, message: 'login failed' } )
        } else {
            req.session.user = {
                username: userAuth
            }
            console.log(req.session.user)
            res.json( {
                status: true,
                message: 'login success'
            } )
        }
    } catch( err ) {
        log.error( err );
    }
}
