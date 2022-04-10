module.exports = (req, res,next) => {
    if(!req.session.cart){ 
        req.session.cart = [];
    }
    res.locals.cart = req.session.cart
    next();
}