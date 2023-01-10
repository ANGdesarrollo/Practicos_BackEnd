const resetSession = (req, res, next) => {
    if(req.session.user) {
        req.session.touch();
        next();
    } else {
        res.json({
            status: false
        })
    }
}

export default resetSession
