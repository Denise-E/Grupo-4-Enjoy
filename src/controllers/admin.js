const products = require("../data/products");
const models = require("../models/products");

module.exports = {
crearProducto: (req,res) => res.render("admin/crearProducto",{
        style: "admin/crearProducto"

 }),

 editarProducto: (req,res) => res.render("admin/editarProducto",{
    products: models.all(),
    product: products.find(product => product.id == req.params.id),
    style: "admin/editarProducto"
}),
    save: (req, res) =>{ 
        let created = create(req.body);
        return res.send(created);
    },
    edit:(req,res) => res.send("Hola"),
    delete:(req,res) => res.send("Hola")
}




