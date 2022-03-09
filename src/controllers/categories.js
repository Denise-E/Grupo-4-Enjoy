const products = require("../data/products");
const categories = require("../data/categories");
const model = require("../models/categories"); 
const productsModel = require("../models/products"); 
const db = require('../../database/models');
const sequelize = require("sequelize");
const op = sequelize.Op;

module.exports ={
    index:(req,res) => res.render("categories/index",{
        style: "categories/index"
    }),
    categories:(req,res) => {
        let result = db.Category.findByPk(req.params.id).then(result => res.send(result)).catch(err => res.send(err.original.sqlMessage))


        return result ? res.render("categories/categories", {
            category: result,
            products: products,
            style: "categories",
            //product:  productsModel.search,
            product: result,
        }) : res.send ("Categoria no encontrada")
    },
}
