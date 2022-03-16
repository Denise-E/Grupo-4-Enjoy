const validator = require('express-validator');

module.exports = [
 validator.body("name").notEmpty().isLength({min:5}).withMessage("Debe tener como mínimo 5 caracteres"),
 validator.body("description").notEmpty().isLength({min:20}).withMessage("Debe tener como mínimo 20 caracteres"),
 validator.body("file").notEmpty().contains(['.jgp', '.jpeg', '.png', '.gif']).withMessage("El fromato de la imagen debe ser jpg, jpeg, png o gif"),
 validator.body("resume").notEmpty().withMessage("Este campo es obligatorio"),
 validator.body("title").notEmpty().withMessage("Este campo es obligatorio"),
 validator.body("location").notEmpty().withMessage("Este campo es obligatorio"),
 validator.body("price").notEmpty().withMessage("Este campo es obligatorio"),
 validator.body("persons").notEmpty().withMessage("Este campo es obligatorio"),
]
