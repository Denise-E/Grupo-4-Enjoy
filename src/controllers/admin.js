const products = require("../data/products");
const model = require("../models/products");
const db = require("../../database/models");
const sequelize = require("sequelize");
const op = sequelize.Op;
const validator = require('express-validator');
const validate = require('../validations/product.js')

module.exports = {
    create: (req,res) =>{ 
    db.Category.findAll().then((result) =>res.render("admin/crearProducto", {
        categories : result,
        style: "admin/crearProducto", 
    })).catch(err => res.send(err))
},

    save: (req,res) => {
        let errors = validator.validationResult(req);
        if (!errors.isEmpty()){
            db.Category.findAll().then(categories=>{
                return res.render("admin/crearProducto",{ 
                    categories,
                    style: "admin/crearProducto",
                    errors: errors.mapped()
                })
            }) .catch(err => res.send(err))
        }else{
        
          db.File.create({ 
              url : req.file ? req.file.filename : "default.png",
              type:"products"
            })
            .then((file) => { 
                db.Product.create({ 
                    name: req.body.name,
                    price: parseInt(req.body.price),
                    idFiles: file.id,
                    persons: req.body.persons,
                    location: req.body.location,
                    title: req.body.title,
                    resume: req.body.resume,
                    description: req.body.description,
                    idCategories: req.body.category
            })
            .then(() => res.redirect("/products/" ))
            .catch(err => res.send(err))
        })
        //let result = model.create(req.body); //Se cambia por la base de datos 
        
    }}

}

