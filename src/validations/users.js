const validator = require('express-validator');

module.exports ={
    login: [
        validator.body("password").notEmpty().withMessage("Este campo es obligatorio"),
        validator.body("email").notEmpty().withMessage("Este campo es obligatorio"),
    ],
    register: [
        validator.body("firstName").notEmpty().withMessage("Debe tener como mínimo 2 caracteres").isLength({min:2}),
        //FALTA VALIDAR LASTNAME
       // validator.body("email").notEmpty().withMessage("Ingrese un formato de email valido").isEmail().contains("@gmail.com","@hotmail.com","@yahoo.com","@enjoy.com"),
        validator.body("password").notEmpty().withMessage("Debe tener como mínimo 8 caracteres").isLength({min:8}),
       // validator.body("file").notEmpty().withMessage("El formato de la imagen debe ser jpg, jpeg, png o gif").contains(['.jgp', '.jpeg', '.png', '.gif']),
 
    ]
}
 
