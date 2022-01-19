const products = require("../data/products");
const model = require("../models/products");

module.exports = {
create: (req,res) => res.render("admin/crearProducto", {
    style: "admin/crearProducto", 
    products: model.all(),
    title:"Productos",
}),

    save: (req,res) => {
        req.body.file = req.files;
        let result = model.store(req.body);
        return res.redirect("/products/" )
        //res.send(result);
    },
  

}

