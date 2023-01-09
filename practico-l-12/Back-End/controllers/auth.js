import {log} from "../utils/logger.js";
import {ContainerMongoDaos} from '../daos/sessionDaos/sessionMongoDaos.js';

const Container = new ContainerMongoDaos();

export const auth = (req, res) => {
    try {
        const {userAuth, password} = req.body;
        if (userAuth !== 'matias@gmail.com' || password !== '123') {
            return res.json({status: false, message: 'login failed'})
        } else {
            req.session.user = userAuth
            res.json({
                status: true,
                message: 'login success'
            })
        }
    } catch (err) {
        log.error(err);
    }
}
