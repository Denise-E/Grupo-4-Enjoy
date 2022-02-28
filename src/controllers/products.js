const products = require("../data/products");
const coments = require("../data/coments");
const model = require("../models/products");
const fileModel = require("../models/file");



module.exports = {
    index:(req,res) =>{ 
        let products= model.all()
        //return res.send (products);
        res.render("products/index",{
        
        products, style: "products/index"
    }) }, 
    productDetail: (req,res) => {
        let result = model.search("id", req.params.id);
        return result ? res.render("products/productDetail", {
            product: model.search,
            coments: coments,
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
    editarProducto: (req,res) => 
    //res.send (model.search("id", req.params.id)),

    res.render("admin/editarProducto",{
       products: model.all(),
     product: model.search("id", req.params.id),
      style: "admin/editarProducto"
    }),
    modify: (req,res) => {
        let updated = model.editarProducto (req.params.id,req.body)
        return res.redirect("/products/"+updated.id)
        
    },
    misCompras: (req, res) => res.render("/products/misCompras", {  
        style: [],
        products: model.search("id", req.params.misCompras)
        
    }),
    
    
}