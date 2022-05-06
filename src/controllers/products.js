const products = require("../data/products");
const coments = require("../data/coments");
const model = require("../models/products");

const db = require("../../database/models");
const sequelize = require("sequelize");
const op = sequelize.Op;

const validator = require('express-validator');


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
            where:{id: req.body.id}
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
        if (!errors.isEmpty()){
            db.Product.findByPk(req.params.id)
            .then(function(result) {
                 return res.render("admin/editarProducto",{
                product: result,
                style: "admin/editarProducto",
                errors: errors.mapped()
            })
            })
           
        }else{
      
        db.File.create({
            type:"products", 
            url: req.file ? req.file.filename : "default.png" }) 
        .then((file)=>{ 
        db.Product.update({
                name: req.body.name,
                description: req.body.description,
                price: parseInt(req.body.price),
                resume: req.body.resume,
                idFiles: file.id,
                persons: req.body.persons,
                location: req.body.location,
                title: req.body.title,
                description: req.body.description,
        }, {where: {id: req.params.id}})})
        
        .then(() => res.redirect("/products/"+req.params.id))
        .catch(err => res.send(err))
        }
    },
     compras: (req, res) =>{
        db.Product.findAll({include:["File"]}).then(result => res.render("products/compras", {  
            product: result,
            style: ["products/compras"],
        }))
        .catch(err => res.send(err))
    },
    search: (req,res) =>{
        db.Product.findAll({
            where: { name: { //productName
                [op.like] : "%" + req.body.search + "%"
            }},
            include: ["File"]
        })
        .then(results => {
            return res.render ('products/searchs',{
                results: results,
                style: ["products/searchs"],
                title: 'Resultado de búsqueda'
            })
        })
    },
    //carrito
    addCart: async (req, res) =>{
        try{
            const {id, quantity} = req.body;
            const product = await db.Product.findByPk(id);
            if(!req.session.cart){
                req.session.cart = [];
            }
            const cart = req.session.cart;
            const productExist = cart.find(item => item.id == id);
            
            if (productExist){
                //res.send(productExist)
                req.session.cart = cart.map(item => {
                    if(item.id == id){
                        item.quantity = item.quantity += parseInt(quantity);
                        item.subtotal= product.price * item.quantity;
                    }
                    return item;
                });
                }else{
                    req.session.cart.push({
                        id:product.id,
                        name: product.name,
                        price: product.price,
                        quantity: parseInt(quantity),
                        subtotal: product.price * parseInt(quantity)
        
                    });

                }
            res.redirect("/products/cart");

        } catch (err) {
            res.send(err);
        }
    },
    eliminar: async (req, res) => {
        try {
            const {id} = req.body;
            const cart = req.session.cart;
            req.session.cart = cart.filter(item => item.id != id);
            res.redirect('/products/cart') 
        }catch (err) {
            res.send(err);
        }
    }
    
}