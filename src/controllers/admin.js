const products = require("../data/products");
const model = require("../models/products");
const db = require("../../database/models");
const sequelize = require("sequelize");
const op = sequelize.Op;

module.exports = {
    create: (req,res) => res.render("admin/crearProducto", {
        style: "admin/crearProducto", 
    }),

    save: (req,res) => {
        req.body.file = req.files && req.files.length > 0 ? req.files[0].filename:"default.png";
        let category = db.Category.findOne ({where:{category:req.body.category}})
        let file = db.File.create({url:req.body.file,type:"products"})
        //let result = model.create(req.body); //Se cambia por la base de datos 
        Promise.all([category,file]).then(([category,file])=>{
            db.Product.create({ 
                name: req.body.name,
                price: parseInt(req.body.price),
                idFile: file.id,
                persons: req.body.persons,
                location: req.body.location,
                title: req.body.title,
                resume: req.body.resume,
                description: req.body.description,
                idCategories: category.id,

            })
            .then(() => res.redirect("/products/" ))
            .catch(err => res.send(err))
        }).catch(err => res.send(err))
        
    }

}

