module.exports = (req, res,next) => {
    if(!req.session.fav){ 
        req.session.fav = [];
    }
    res.locals.fav = req.session.fav
    next();
}