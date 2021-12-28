
const productos = require("../data/products");

module.exports = {
    index: (req,res) => res.render("index",{
     
        style: "index"
    })   
}