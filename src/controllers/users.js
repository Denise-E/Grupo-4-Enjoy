const validator = require('express-validator');
const bcrypt = require('bcrypt');
const model = require("../models/user");
const db = require('../../database/models');
const sequelize = require("sequelize");
const op = sequelize.Op;

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
        } ).catch(err => res.send(err.original.sqlMessage))
        //model.search("email", req.body.email)
        
},
    save: (req,res) => {
        let errors = validator.validationResult(req)

       if (!errors.isEmpty()) {
            return res.render("users/register",{
                style: "register",
                errors: errors.mapped()
            })
        }
    

        // let userRegistred = model.create(req.body) Se cambia por la base de datos
        db.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            image: req.body.image
        })

        .then(() => res.redirect("/users/login"))

        .catch(err => res.send(err.original.sqlMessage))
    },
 
    logout: (req,res) => {
        delete req.session.user
        res.cookie("email",null,{maxAge:-1})
        return res.redirect("/")
    },
    list: (req,res) => res.render("users/list", { 
        style:["users/list"],
        users: db.User.findAll().then(result => res.send(result)).catch(err => res.send(err.original.sqlMessage))
    }),
    show: (req,res) => res.render("users/show", { 
        style:["users/show"],
        user: db.User.findByPk(req.params.id).then(result => res.send(result)).catch(err => res.send(err.original.sqlMessage))
    }),
    delete: (req,res)=> {
        //model.delete(req.body.id)
        //return res.redirect("/users/list")
        db.User.destroy({
            where:{id: req.params.id}
        })
        .then(() => res.redirect("/users/list"))
        .catch(err => res.send(err.original.sqlMessage))
    },
    editarUsuario: (req,res) => 
    //res.send (model.search("id", req.params.id)),

    res.render("users/editarUsuario",{
       users: db.User.findAll().then(result => res.send(result)).catch(err => res.send(err.original.sqlMessage)),
     user: db.User.findByPk(req.params.id).then(result => res.send(result)).catch(err => res.send(err.original.sqlMessage)),
      style: ["users/editarUsuario"]
    }),
    modify: (req,res) => {
        //let updated = model.editarUsuario (req.params.id,req.body)
        //return res.redirect("/users/"+updated.id)
        
        db.User.update({
            ...req.body,
        }, {where: {id: req.params.id}})
   
        .then(() => res.redirect("/users/"))
        .catch(err => res.send(err.original.sqlMessage))
    },
}