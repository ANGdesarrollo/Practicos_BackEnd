const { isAdmin } = require('../server/server.js');

module.exports.isAdminValidator = (req, res , next) => {
    if(isAdmin){
        next()
    } else {
        res.json({error: -1, description: 'Route /api/products and method POST not authorized'});
    }
}