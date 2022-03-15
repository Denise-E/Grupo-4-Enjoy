const validator = require('express-validator');
const bcrypt = require('bcrypt');
const model = require("../models/user");
const db = require('../../database/models');
const sequelize = require("sequelize");
const op = sequelize.Op;

module.exports = {
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
        db.User.findOne({where: {email:req.body.email}}).then(exist => {
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
        } ).catch(err => res.send(err))
        
},
    save: (req,res) => {
        let errors = validator.validationResult(req)

       if (!errors.isEmpty()) {
            return res.render("users/register",{
                style: "register",
                errors: errors.mapped()
            })
        }

        db.User.create({ include:[{as:"File"}]},{ 
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            image: req.body.image
        })

        .then(() => res.redirect("/users/login"))

        .catch(err => res.send(err))
    },
 
    logout: (req,res) => {
        delete req.session.user
        res.cookie("email",null,{maxAge:-1})
        return res.redirect("/")
    },
    list: (req,res) => {
        db.User.findAll({include:["File"]}).then(result =>res.render("users/list", { 
            user: result,
            style:["users/list"] })).catch(err => res.send(err))
    },
    show: (req,res) => {
        db.User.findByPk(req.params.id, {include:["File"]}).then(result =>res.render("users/show", { 
        user: result,
        style:["users/show"]
    })).catch(err => res.send(err))
    },
    delete: (req,res)=> {
        //model.delete(req.body.id)
        //return res.redirect("/users/list")
        db.User.destroy({
            where:{id: req.params.id}
        })
        .then(() => res.redirect("/users/list"))
        .catch(err => res.send(err))
    },
    editarUsuario: (req,res) => {
     db.User.findByPk(req.params.id).then(result => res.render("users/editarUsuario",{  
         user: result,
         style: ["users/editarUsuario"]
    })).catch(err => res.send(err))
    },
    modify: (req,res) => {
        //let updated = model.editarUsuario (req.params.id,req.body)
        //return res.redirect("/users/"+updated.id)
        db.User.update({
            ...req.body,
        }, {where: {id: req.params.id}})
   
        .then(() => res.redirect("/users/"))
        .catch(err => res.send(err))
    },
}