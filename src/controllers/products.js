
const productos = require("../data/products");

module.exports = {
    productDetail: (req,res) => res.render("productDetail",{
     
        style: "productDetail"
    }),

    cart: (req,res) => res.render("cart",{
     
        style: "cart"
    })

}