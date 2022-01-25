const validator = require('express-validator');
const model = require("../models/user")

module.exports = {
    
    login: (req,res) => res.render("users/login",{
        
        style: "login"
    }),

    register: (req,res) => res.render("users/register",{
        
        style: "register"
    }),
    save: (req,res) => {
        let errors = validator.validationResult(req)

        if (!errors.isEmpty()) {
            return res.render("users/register",{
                errors: errors.mapped()
            })
        }

        let exist = model.search("email", req.body)
        if (exist) {
            return res.render("users/register",{
                errors:{
                    email:{
                        msg: "El email ya se encuentra registrado"
                    }
                }
            })
        }

        let userRegistred = model.create(req.body)

        return res.redirect("/users/login")

    }
}