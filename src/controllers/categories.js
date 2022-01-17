const products = require("../data/products");
const categories = require("../data/categories");
const model = require("../models/categories"); 
const productsModel = require("../models/products"); 

module.exports ={
    index:(req,res) => res.render("categories/index",{
        style: "categories/index"
    }),
    categories:(req,res) => {
        let result = model.search("id", req.params.id);
        return result ? res.render("categories/categories", {
            category: result,
            products: products,
            style: "categories",
            product:  productsModel.search,
        }) : res.render ("error", {
            msg:"Categoria no encontrada"
        })
    },
}
