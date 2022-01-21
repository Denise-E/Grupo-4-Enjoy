const products = require("../data/products");
const model = require("../models/products");

module.exports = {
    create: (req,res) => res.render("admin/crearProducto", {
        style: "admin/crearProducto", 
        products: model.all(),
        title:"Productos",
    }),

    save: (req,res) => {
        req.body.file = req.files && req.files.length > 0 ? req.files[0].filename:null;
       //return res.send (req.body)
        let result = model.create(req.body);
        return res.redirect("/products/" )
        //res.send(result);
    },
  

}

