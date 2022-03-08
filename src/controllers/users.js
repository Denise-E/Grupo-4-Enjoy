const validator = require('express-validator');
const bcrypt = require('bcrypt');
const model = require("../models/user");
//const db = require('../../database/models');

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

        if(errors.length >0) {
            return res.render("users/login",{
                style: "login",
                errors
            })
        }
        let exist = model.search("email", req.body.email)
        if (!exist) {
           return res.render("users/login",{
            style: "login",
               errors:{
                    email:{
                        msg: "El email no existe",
                    }
                }
            })
        }
        if (!bcrypt.compareSync(req.body.password, exist.password)) {
            return res.render("users/login",{
             style: "login",
                errors:{
                     password:{
                         msg: "La contraseña es incorrecta",
                     }
                 }
             })
         }
        if(req.body.remember){
            res.cookie("email",req.body.email,{maxAge:1000*60*60*24*30})
        }
 
    req.session.user= exist
    return res.redirect ("/")
},
    save: (req,res) => {
        let errors = validator.validationResult(req)

       if (!errors.isEmpty()) {
            return res.render("users/register",{
                style: "register",
                errors: errors.mapped()
            })
        }
        /** 
        let exist = model.search("email", req.body)
        if (exist) {
            return res.render("users/register",{
                errors:{
                    email:{
                        msg: "El email ya se encuentra registrado"
                    }
                }
            })
        }*/

        let userRegistred = model.create(req.body)

        return res.redirect("/users/login")

      
    },
 
    logout: (req,res) => {
        delete req.session.user
        res.cookie("email",null,{maxAge:-1})
        return res.redirect("/")
    },
    list: (req,res) => res.render("users/list", { 
        style:["users/list"],
        users: model.all()
    }),
    show: (req,res) => res.render("users/show", { 
        style:["users/show"],
        user: model.search("id", req.params.id)
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