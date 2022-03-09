const products = require("../data/products");
const coments = require("../data/coments");
const model = require("../models/products");

const db = require("../../database/models");
const sequelize = require("sequelize");
const op = sequelize.Op;



module.exports = {
    index:(req,res) =>{ 
        let products= db.Product.findAll().then(result => res.send(result)).catch(err => res.send(err.original.sqlMessage))
        //return res.send (products);
        res.render("products/index",{
        
        products, style: "products/index",
        
    }) }, 
    productDetail: (req,res) => {
        let result = db.Product.findByPk(req.params.id).then(result => res.send(result)).catch(err => res.send(err.original.sqlMessage))
        return result ? res.render("products/productDetail", {
            product: result,
            coments: coments,
            coment: coments.filter(coment => coment.experiencia === products.find(product => product.id == req.params.id).name),
            style: "products/productDetail",
            product: result,
        }) : res.send ("Producto no encontrado")
    },
    cart: (req,res) => res.render("products/cart",{
     
        style: "cart"
    }),
    crearComentario: (req,res) => res.render("products/crearComentario",{
        products: db.Product.findAll().then(result => res.send(result)).catch(err => res.send(err.original.sqlMessage)),
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
       products: db.Product.findAll().then(result => res.send(result)).catch(err => res.send(err.original.sqlMessage)),
     product: db.Product.findByPk(req.params.id).then(result => res.send(result)).catch(err => res.send(err.original.sqlMessage)),
      style: "admin/editarProducto"
    }),
    modify: (req,res) => {
        //let updated = model.editarProducto (req.params.id,req.body)
        //return res.redirect("/products/"+updated.id)
        db.Product.update({
            ...req.body,
        }, {where: {id: req.params.id}})
   
        .then(() => res.redirect("/products/"+req.params.id))
        .catch(err => res.send(err.original.sqlMessage))
        
    },
     compras: (req, res) => res.render("products/compras", {  
         products: db.Product.findAll().then(result => res.send(result)).catch(err => res.send(err.original.sqlMessage)),
        style: ["products/compras"],
        
    }),
    
}