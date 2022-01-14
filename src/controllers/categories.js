const products = require("../data/products");
const categories = require("../data/categories");
//const models = require("../models/products"); Hbaría que crearlo

module.exports ={
    index:(req,res) => res.render("categories/index",{
        style: "categories/index"
    }),
    categories:(req,res) => res.render("categories/categories",{
        style: "categories/categories"
    }),
}
