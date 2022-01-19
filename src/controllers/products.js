const products = require("../data/products");
const coments = require("../data/coments");
const model = require("../models/products");



module.exports = {
    index:(req,res) => res.render("products/index",{
        products: model.all(),
        style: "products/index"
    }),
    productDetail: (req,res) => {
        let result = model.search("id", req.params.id);
        return result ? res.render("products/productDetail", {
            product: model.search,
            coment: coments.filter(coment => coment.experiencia === products.find(product => product.id == req.params.id).name),
            style: "products/productDetail",
            product: result,
        }) : res.render("error", {
            msg:"Producto no encontrado"
        })
    },
    cart: (req,res) => res.render("products/cart",{
     
        style: "cart"
    }),
    crearComentario: (req,res) => res.render("products/crearComentario",{
        products: products,
        style: "crearComentario"
    }),

   
    
    delete: (req,res)=> {
        model.delete(req.body.id)
        return res.redirect("/products/")
    },
    editarProducto: (req,res) => res.render("admin/editarProducto",{
        products: model.all(),
        product: model.search("id", req.params.id),
        style: "admin/editarProducto"
    }),
    modify: (req,res) => {
        let updated = model.editarProducto (req.params.id,req.body)
        return res.redirect(updated)
        //res.send(result);
    },
    
}