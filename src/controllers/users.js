const validator = require('express-validator');
const model = require("../models/user")

module.exports = {
    /*index: (req,res) =>  res.render('users/list',{
        styles:['users/list'],
        title: 'Usuarios',
        users: model.all()
    }), */
    
    login: (req,res) => res.render("users/login",{
        
        style: "login"
    }),

    register: (req,res) => res.render("users/register",{
        
        style: "register"
    }),
    access: (req,res)=> {
        let errors = validator.validationResult(req).mapped()
 
        if (!errors.length >0) {
            return res.render("users/login",{
                errors
            })
        }
        let exist = model.search("email", req.body.email)
        if (!exist) {
            return res.render("users/login",{
                errors:{
                    email:{
                        msg: "El email no existe"
                    },
                }
            })
        }
        if(req.body.remember){
            res.cookie("email",req.body.email,{maxAge:1000*60*60*24*30})
        }
 
    req.session.user= exist
    return res.redirect("/")
},
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

        return res.redirect("users/login")

        let created = created(req.body)
        return res.send(created)
    },
 
    logout: (req,res) => res.send({
        data: req.session,
        msg: "llego del profile"
    }),
    list: (req,res) => res.render("users/list", { 
        // chequear que no se ve la vista
        
        style:["users/list"],
        users: model.all()
    }),
    show: (req,res) => res.render("users/show", { 
        // chequear que no se ve la vista
       
        user: model.search("id", req.params.id),
        style:[],
    }),
    delete: (req,res)=> {
        model.delete(req.body.id)
        return res.redirect("/users/list")
    },
    editarUsuario: (req,res) => 
    //res.send (model.search("id", req.params.id)),

    res.render("users/editarUsuario",{
       users: model.all(),
     user: model.search("id", req.params.id),
      style: ["users/editarUsuario"]
    }),
    modify: (req,res) => {
        let updated = model.editarUsuario (req.params.id,req.body)
        return res.redirect("/users/"+updated.id)
        
    },
}