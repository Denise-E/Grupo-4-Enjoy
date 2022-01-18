const products = require("../data/products");
const model = require("../models/products");

module.exports = {
create: (req,res) => res.render("admin/crearProducto", {
    style: "admin/crearProducto", 
    products: model.all(),
    title:"Productos",
}),
 editarProducto: (req,res) => res.render("admin/editarProducto",{
    products: model.all(),
    product: model.search("id", req.params.id),
    style: "admin/editarProducto"
}),
    save: (req,res) => {
        let result = model.store(req.body);
        return res.redirect("/products/" + result.id)
        //res.send(result);
    },
    edit:(req,res) => res.send("Hola"),
    delete:(req,res) => res.send("Hola"),

}

