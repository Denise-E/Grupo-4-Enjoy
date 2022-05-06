const productos = require("../data/products");
const coments = require("../data/coments");
const model = require("../models/products");



const sequelize = require("sequelize");
const db = require("../../database/models");
const op = sequelize.Op;

const validator = require('express-validator');
const validate = require('../validations/product.js')

module.exports = {
    index: (req,res) => {
        db.Product.findAll({include:["File"]}).then(result =>res.render("index",{
            products: result, 
            style: "index", }))
            .catch(err => res.send(err))
        style: "index"
    },
    quienesSomos: (req,res) => res.render("footerLinks/quienesSomos",{
     
        style: "footerLinks/quienesSomos"
    }),
    trabajarJuntos: (req,res) => res.render("footerLinks/trabajarJuntos",{
     
        style: "footerLinks/trabajarJuntos"
    }),
    puntosVenta: (req,res) => res.render("footerLinks/puntosVenta",{
     
        style: "footerLinks/puntosVenta"
    }),
    tuExperiencia: (req,res) => res.render("footerLinks/tuExperiencia",{
     
        style: "footerLinks/tuExperiencia"
    }),
    comoComprar: (req,res) => res.render("footerLinks/comoComprar",{
     
        style: "footerLinks/comoComprar"
    }),
    contacto: (req,res) => res.render("footerLinks/contacto",{
     
        style: "footerLinks/contacto"
    }),
    preguntas: (req,res) => res.render("footerLinks/preguntas",{
     
        style: "footerLinks/preguntas"
    }),
    devoluciones: (req,res) => res.render("footerLinks/devoluciones",{
     
        style: "footerLinks/devoluciones"
    }),
    politicasGarantias: (req,res) => res.render("footerLinks/politicasGarantias",{
     
        style: "footerLinks/politicasGarantias"
    }),
    terminosCondiciones: (req,res) => res.render("footerLinks/terminosCondiciones",{
     
        style: "footerLinks/terminosCondiciones"
    }),
    experienciaUser: (req,res) => res.render("abrirExperiencia",{
     
        style: "abrirExperiencia"
    }),
    comofunciona: (req,res) => res.render("comofunciona",{
     
        style: "comofunciona"
    }),
    corporativas: (req,res) => res.render("corporativas",{
     
        style: "corporativas"
    }),
    envio: (req,res) => res.render("preguntasFrecuentes/envio",{
     
        style: "preguntasFrecuentes/envio"
    }),
    compra: (req,res) => res.render("preguntasFrecuentes/compra",{
     
        style: "preguntasFrecuentes/compra"
    }),
    uso: (req,res) => res.render("preguntasFrecuentes/uso",{
     
        style: "preguntasFrecuentes/uso"
    }) 
}