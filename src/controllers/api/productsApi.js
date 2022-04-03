const db = require('../../../database/models');
const sequelize = require("sequelize");
const op = sequelize.Op;

module.exports = {
    list: (req,res) =>{ 
    let allProducts =db.Product.findAll({include:["category"]})
    .then((allProducts) =>{
        let result ={
            count: allProducts.length,
            countByCategory: {
                'Gastronomia' : allProducts.filter(product => product.idCategories == 1).length,
                'Aventura' : allProducts.filter(product => product.idCategories == 2).length,
                'Estar Bien' : allProducts.filter(product => product.idCategories == 3).length,     
                'Entretenimiento' : allProducts.filter(product => product.idCategories == 4).length,           
                'Estadias' : allProducts.filter(product => product.idCategories == 5).length,
            },
            products: [],
        }  

        allProducts.forEach(product =>{
            result.products.push({
                id: product.id,
                name: product.name,
                description: product.description,
                category: product.category.category,
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
        db.Product.findByPk(req.params.id, {include:["File", "category"]})
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
                    category: product.category.category,
                    imageURL: "http://localhost:300/uploads/" + product.File.url
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