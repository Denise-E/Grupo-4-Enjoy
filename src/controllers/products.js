const products = require("../data/products");
const coments = require("../data/coments");
const model = require("../models/products");
const fileModel = require("../models/file");
const db = require("../../database/models");
const sequelize = require("sequelize");
const op = sequelize.Op;



module.exports = {
    index:(req,res) =>{ 
        let products= model.all()
        //return res.send (products);
        res.render("products/index",{
        
        products, style: "products/index",
        
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
        db.Product.destroy({
            where:{id: req.params.id}
        })
        .then(() => res.redirect("/products"))
        .catch(err => res.send(err.original.sqlMessage))
    //cambia por el de base de datos
    //    model.delete(req.body.id)
    //    return res.redirect("/products/")
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
     compras: (req, res) => res.render("products/compras", {  
         products: model.all(),
        style: ["products/compras"],
        
    }),
    
}