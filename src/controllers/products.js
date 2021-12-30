
const products = require("../data/products");

module.exports = {
    productDetail: (req,res) => res.render("products/productDetail",{
        products: products,
        style: "productDetail"
    }),

    cart: (req,res) => res.render("products/cart",{
     
        style: "cart"
    }),
    
    categories: (req,res) => res.render("products/categories",{
        products: products,
        style: "categories"
    })

}