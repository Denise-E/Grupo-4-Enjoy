
const productos = require("../data/products");

module.exports = {
    productDetail: (req,res) => res.render("products/productDetail",{
     
        style: "productDetail"
    }),

    cart: (req,res) => res.render("products/cart",{
     
        style: "cart"
    })

}