import { log } from "../utils/logger.js";

export const auth = ( req, res ) => {
    try {
        const { userAuth, password } = req.body;
        if( userAuth !== 'matias@gmail.com' || password !== '123' ) {
            return res.json( { status: false, message: 'login failed' } )
        } else {
            req.session.user = userAuth

            res.json( {
                status: true,
                message: 'login success'
            } )
        }
    } catch( err ) {
        log.error( err );
    }
}

export const authVerification = (req, res) => {
    try {
        if(req.session.user) {
            res.json({
                status:true,
                user: req.session.user,
                message: 'User is logged in'
            })
        } else {
            res.json({
                status: false,
                message: 'User is not logged in'
            })
        }
    }catch(err) {
        log.error(err)
        res.json({
            status: false,
            message: 'Fatal Error, please contact support'
        })
    }
}

export const destroySession = (req, res) => {
    try {
        if(req.session.user) {
            req.session.destroy((err) => {
                if(err) {
                    res.json({
                        status: false,
                        message: 'User log out failed'
                    })

                } else {
                    res.json({
                        status: true,
                        message: 'User logged out successfully'
                    })
                }
            })
        }

    }catch(err) {
        log.error(err)
        res.json({
            status: false,
            message: 'Fatal Error, please contact support'
        })
    }
}
