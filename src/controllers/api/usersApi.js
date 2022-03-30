const db = require('../../../database/models');
const sequelize = require("sequelize");
const op = sequelize.Op;

module.exports = {
    list: (req,res) => {
        db.User.findAll()
        .then(users => {
            let result ={
                data: users,
                meta: {
                    status: 200,
                    total: users.length,
                    url: 'api/users'
                }
            }
            res.json(result)
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
        db.User.findByPk(req.params.id)
        .then(user => {
            let result ={
                data: user,
                meta: {
                    status: 200,
                    total: user.length,
                    url: 'api/users/:id'
                }
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
    },
}