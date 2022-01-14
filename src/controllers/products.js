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
    crearComentario: (req,res) => res.render("products/crearComentario",{
        products: products,
        style: "crearComentario"
    }),

}