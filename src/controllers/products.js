const products = require("../data/products");
const coments = require("../data/coments");
const models = require("../models/products");



module.exports = {
    index:(req,res) => res.render("products/index",{
        products: models.all(),
        style: "products/index"
    }),
    productDetail: (req,res) => res.render("products/productDetail",{
        products: models.all(),
        coments: coments,
        product: products.find(product => product.id == req.params.id),
        coment: coments.filter(coment => coment.experiencia === products.find(product => product.id == req.params.id).name),
        style: "productDetail"
    }),

    cart: (req,res) => res.render("products/cart",{
     
        style: "cart"
    }),
    
    categories: (req,res) => res.render("products/categories",{
        products: products,
        style: "categories"
    }),

    gastronomia: (req,res) => res.render("products/categories/gastronomia",{
        products: products,
        style: "gastronomia"
    }),

    aventura: (req,res) => res.render("products/categories/aventura",{
        products: products,
        style: "aventura"
    }),

    estarBien: (req,res) => res.render("products/categories/estarBien",{
        products: products,
        style: "estarBien"
    }),

    entretenimiento: (req,res) => res.render("products/categories/entretenimiento",{
        products: products,
        style: "entretenimiento"
    }),

    estadias: (req,res) => res.render("products/categories/estadias",{
        products: products,
        style: "estadias"
    }),
    crearComentario: (req,res) => res.render("products/crearComentario",{
        products: products,
        style: "crearComentario"
    }),

}