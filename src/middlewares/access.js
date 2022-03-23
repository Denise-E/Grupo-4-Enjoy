module.exports= (req,res,next)  => req.session && req.session.user ? next() : res.redirect ("/users/login")
  



