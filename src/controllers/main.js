
const productos = require("../data/products");

module.exports = {
    index: (req,res) => res.render("index",{
     
        style: "index"
    }),
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
    })
}