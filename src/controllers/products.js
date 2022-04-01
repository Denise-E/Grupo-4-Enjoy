const products = require("../data/products");
const coments = require("../data/coments");
const model = require("../models/products");

const db = require("../../database/models");
const sequelize = require("sequelize");
const op = sequelize.Op;

const validator = require('express-validator');
const validate = require('../validations/product.js')


module.exports = {
    index:(req,res) =>{ 
        db.Product.findAll({include:["File"]}).then(result =>res.render("products/index",{
        products: result, 
        style: "products/index", }))
        .catch(err => res.send(err))
        }, 
    productDetail: (req,res) => {
        db.Product.findByPk(req.params.id, {include:["File"]})
        .then(result => (
            result ? res.render("products/productDetail", {
            style: "products/productDetail",
            product: result,
            coments: coments,
            coment: coments.filter(coment => coment.experiencia === products.find(product => product.id == req.params.id))})
        : res.send ("Producto no encontrado")))
        .catch(err => res.send(err))
    },
    cart: (req,res) => res.render("products/cart",{
     
        style: "cart"
    }),
    crearComentario: (req,res) => 
    db.Product.findAll().then(result => res.render("admin/products/crearComentario",{
        products: result,
        style: "crearComentario"
    })).catch(err => res.send(err)),

   
    delete: (req,res)=> {
        db.Product.destroy({
            where:{id: req.params.id}
        })
        .then(() => res.redirect("/products"))
        .catch(err => res.send(err))
    },
    editarProducto: (req,res) =>{
    let categories = db.Category.findAll();
    let product = db.Product.findByPk(req.params.id)
    Promise.all([categories, product])
    .then(([categories, product]) => res.render("admin/editarProducto",{  
         product: product,
         categories: categories,
         style: "admin/editarProducto"
    })).catch(err => res.send(err))
 },
    modify: (req,res) => {
        let errors = validator.validationResult(req);
        db.Product.findByPk(req.params.id).then((errors, result) =>{
            /** 
        if (errors){
            return res.render("admin/editarProducto",{errors,
                product: result,
                style: "admin/editarProducto",
                errors: errors.mapped()
            })
        }*/
       //return res.send(req.body)
        db.File.update({type:"products", url: req.file.filename}) 
        
        .then((file)=>{ 
        db.Product.update({
            ...req.body,
        }, {where: {id: req.params.id}}) 
       
        .then(() => res.redirect("/products/"+req.params.id))
        .catch(err => res.send(err))
    })}).catch(err => res.send(err))
        
    },
     compras: (req, res) =>{
        db.Product.findAll({include:["File"]}).then(result => res.render("products/compras", {  
            product: result,
            style: ["products/compras"],
        }))
        .catch(err => res.send(err))
    }
    
}