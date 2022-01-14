const products = require("../data/products");
const categories = require("../data/categories");
//const models = require("../models/products"); Habaría que crearlo

module.exports ={
    index:(req,res) => res.render("categories/index",{
        style: "categories/index"
    }),
    categories:(req,res) => res.render("categories/categories",{
        products: products,
        category: categories.find(category => category.id == req.params.id),
        style: "categories/categories"
    }),
}
