const db = require('../../../database/models');
const sequelize = require("sequelize");
const op = sequelize.Op;

module.exports = {
    list: (req,res) => {
        db.User.findAll()
        .then(allUsers => {
            let result ={
                count:  allUsers.length,
                users: [],
                meta: {
                    status: 200,
                    url: 'api/users'
                },
            }
            allUsers.forEach(user =>{
                result.users.push({
                    id: user.id,
                    name: user.firstName +" "+  user.lastName,
                    email: user.email,
                    detailURL: "http://localhost:3000/api/users/" + user.id
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
        db.User.findByPk(req.params.id, {include:["File"]})
        .then(user => {
            
            
            if(user){
            let result ={
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    imageURL: "http://localhost:300/uploads/"+  user.File.url 
            }

            res.json(result)
        }else{
            return res.status(404).json( {
              error: 'El usuario buscado no existe'
            });
        }
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