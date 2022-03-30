const db = require('../../../database/models');
const sequelize = require("sequelize");
const op = sequelize.Op;

module.exports = {
    list: (req,res) => res.send('Hola'),
    show: (req,res) => res.send('Hola con id'),
}