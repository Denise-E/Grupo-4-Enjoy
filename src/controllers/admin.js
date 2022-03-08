const products = require("../data/products");
const model = require("../models/products");
const db = require("../../database/models");

module.exports = {
    create: (req,res) => res.render("admin/crearProducto", {
        style: "admin/crearProducto", 
        products: model.all(),
        title:"Productos",
    }),

    save: (req,res) => {
        req.body.file = req.files && req.files.length > 0 ? req.files[0].filename:null;

        //let result = model.create(req.body); //Se cambia por la base de datos 

        db.Product.create({ 
            name: req.body.name,
            price: parseInt(req.body.price),
            image: req.body.file,
            persons: req.body.persons,
            location: req.body.location,
            title: req.body.title,
            resume: req.body.resume,
            description: req.body.description,
            category: req.body.category,
        })

        return res.redirect("/products/" )
       
    },
  

}

