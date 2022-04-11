const db = require('../../../database/models');
const sequelize = require("sequelize");
const products = require('../products');
const op = sequelize.Op;

module.exports = {
    user: (req,res) =>{ 
        db.User.findAll({include:["File"]})
        .then(users => {
            let user = users.pop()
            let lastUser ={
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    imageURL: "http://localhost:3000/uploads/"+  user.File.url 
            }
            res.json(lastUser)
        })
        .catch(err => {
            let result = {
                err,
                meta: {
                    status: 404,
                    url: 'api/last/user'
                },
            }
            res.json(result)
        })
    },
    product: (req,res) => {
        db.Product.findAll({include:["File", "category"]})
        .then((products) =>{
            let product = products.pop()
            let lastProduct ={
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
                category: product.category.category,
                imageURL: "http://localhost:3000/uploads/" + product.File.url
            } 
            return res.json(lastProduct)
                })
            
        .catch(err => {
            let result ={
                err,
                meta: {
                    status: 404,
                    url: 'api/last/product'
                },
            }
            res.json(result)
        })
    }
}