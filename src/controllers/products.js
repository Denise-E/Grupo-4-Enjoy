
const products = require("../data/products");
const productos = require("../data/products");

module.exports = {
    productDetail: (req,res) => res.render("products/productDetail",{
        products: productos,
        style: "productDetail"
    }),

    cart: (req,res) => res.render("products/cart",{
     
        style: "cart"
    })

}