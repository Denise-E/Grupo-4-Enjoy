const db = require('../../../database/models');
const sequelize = require("sequelize");
const op = sequelize.Op;

module.exports = {
    list: (req,res) =>{ 
    db.Product.findAll()
    .then(allProducts =>{
        let result ={
            count: allProducts.length,
            products: [],
        }  

        allProducts.forEach(product =>{
            result.products.push({
                id: product.id,
                name: product.name,
                description: product.description,
                detailURL: "http://localhost:3000" + `/api/products/${product.id}`
            })
        })
        return res.json(result)
    })
    .catch(err => {
        let result ={
            err,
            meta: {
                status: 404,
                url: 'api/users'
            },
        }
        res.json(result)
    })
},
    show: (req,res) => {
        db.Product.findByPk(req.params.id, {include:["File"]})
        .then(product => {
            let result ={
                    id: product.id,
                    name: product.name,
                    title: product.title,
                    description: product.description,
                    resume: product.resume,
                    location: product.location,
                    persons: product.persons,
                    price: product.price,
                    fees: product.fees,
                    starsAvg: product.starsAvg,
                    imageURL: "http://localhost:300/uploads/" + product.File
            }

            res.json(result)
        })
        .catch(err => {
            let result = {
                err,
                meta: {
                    status: 404,
                    url: 'api/users/:id'
                },
            }
            res.json(result)
        })
    }
}