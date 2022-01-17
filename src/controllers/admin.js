const products = require("../data/products");
const model = require("../models/products");

module.exports = {
create: (req,res) => res.render("admin/crearProducto",{
        style: "admin/crearProducto",
        products: model.all(),
        product: model.search("id", req.params.id),

 }),

 editarProducto: (req,res) => res.render("admin/editarProducto",{
    products: model.all(),
    product: model.search("id", req.params.id),
    style: "admin/editarProducto"
}),
    save: (req, res) =>{ 
        let created = model.create(req.body);
        return res.send(created);
    },
    edit:(req,res) => res.send("Hola"),
    delete:(req,res) => res.send("Hola"),

}




