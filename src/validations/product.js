const validator = require('express-validator');

module.exports ={ 
    create: [
        validator.body("name").notEmpty().withMessage("Debe tener como mínimo 5 caracteres").isLength({min:5}),
        validator.body("description").notEmpty().withMessage("Debe tener como mínimo 20 caracteres").isLength({min:20}),
        validator.body("file").notEmpty().withMessage("El fromato de la imagen debe ser jpg, jpeg, png o gif").contains(['.jgp', '.jpeg', '.png', '.gif']),
        validator.body("resume").notEmpty().withMessage("Este campo es obligatorio"),
        validator.body("title").notEmpty().withMessage("Este campo es obligatorio"),
        validator.body("location").notEmpty().withMessage("Este campo es obligatorio"),
        validator.body("price").notEmpty().withMessage("Este campo es obligatorio"),
        validator.body("persons").notEmpty().withMessage("Este campo es obligatorio"),
    ],
    edit:[
        validator.body("name").notEmpty().withMessage("Debe tener como mínimo 5 caracteres").isLength({min:5}),
        validator.body("description").notEmpty().withMessage("Debe tener como mínimo 20 caracteres").isLength({min:20}),
        validator.body("file").notEmpty().withMessage("El fromato de la imagen debe ser jpg, jpeg, png o gif").contains(['.jgp', '.jpeg', '.png', '.gif']),
        validator.body("resume").notEmpty().withMessage("Este campo es obligatorio"),
        validator.body("title").notEmpty().withMessage("Este campo es obligatorio"),
        validator.body("location").notEmpty().withMessage("Este campo es obligatorio"),
        validator.body("price").notEmpty().withMessage("Este campo es obligatorio"),
        validator.body("persons").notEmpty().withMessage("Este campo es obligatorio"),
    ]
}