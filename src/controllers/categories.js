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
       db.Category.findByPk(req.params.id, {include:[{as:"productos", model:db.Product, include:["File"]}]}).then(result => 
        result ? res.render("categories/categories", {
            category: result,
            products: result.productos, //devuelve la asosiación
            style: "categories",
            //product:  productsModel.search,
        }) : res.send ("Categoria no encontrada")
        ).catch(err => res.send(err));

    },
}
