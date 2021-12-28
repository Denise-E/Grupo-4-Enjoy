module.exports = {
    
    login: (req,res) => res.render("users/login",{
        
        style: "login"
    }),

    register: (req,res) => res.render("users/register",{
        
        style: "register"
    })
}