const products = require("../data/products");
const {all} = require("../models/products");

module.exports = {
    // create: (req,res) => res.render("admin/crearProducto",{
    //     products: all(),
    //     title:"Productos",
    //     style: "admin/crearProducto"
create: (req,res) => res.send({products: all(),
        
}),

 editarProducto: (req,res) => res.render("admin/editarProducto",{
    products: mode.all(),
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

