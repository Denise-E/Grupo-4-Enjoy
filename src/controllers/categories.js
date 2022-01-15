const products = require("../data/products");
const categories = require("../data/categories");
const model = require("../models/products"); 

module.exports ={
    index:(req,res) => res.render("categories/index",{
        style: "categories/index"
    }),
    categories:(req,res) => res.render("categories/categories",{
        products: products,
        product: model.search,
        category: categories.find(category => category.id == req.params.id),
        style: "categories"
    }),
    delete: (req,res)=> {
        model.delete(req.body.id)
        return res.redirect("/categories/")
    }
}
