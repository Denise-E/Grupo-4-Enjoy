
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
    })
}