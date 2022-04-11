const validator = require('express-validator');
const path = require('path');

module.exports ={
    login: [
        validator.body("password").notEmpty().withMessage("Este campo es obligatorio"),
        validator.body("email").notEmpty().withMessage("Este campo es obligatorio"),
    ],
    register: [
        validator.body("firstName").notEmpty().isLength({min:2}).withMessage("Debe tener como mínimo 2 caracteres"),
        validator.body("lastName").notEmpty().isLength({min:2}).withMessage("Debe tener como mínimo 2 caracteres"),
        validator.body("email").notEmpty().isEmail().withMessage("Escriba un email válido"),
        validator.body("password").notEmpty().isLength({min:8}).withMessage("Debe tener como mínimo 8 caracteres"),
        validator.body('image').custom((value,{req})=>{
            if (req.file) {
                let allowedExtensions = ['.jpeg','.jpg','.gif','.png'];
                let file = req.file
                let fileExtension = path.extname(file.filename)
                if(!allowedExtensions.includes(fileExtension)){
                    throw new Error("Solo se admiten archivos .jpeg .jpg .png .gif")
            }
        }
        return true
    })
 
    ],
    edit: [
        validator.body("firstName").notEmpty().withMessage("Debe tener como mínimo 2 caracteres").isLength({min:2}),
        validator.body("lastName").notEmpty().withMessage("Debe tener como mínimo 2 caracteres").isLength({min:2}),
        validator.body("email").notEmpty().withMessage("Escriba un email válido").isEmail(),
        validator.body("password").notEmpty().withMessage("Debe tener como mínimo 8 caracteres").isLength({min:8}),
        validator.body('image').custom((value,{req})=>{
            if (req.file) {
                let allowedExtensions = ['.jpeg','.jpg','.gif','.png'];
                let file = req.file
                let fileExtension = path.extname(file.filename)
                if(!allowedExtensions.includes(fileExtension)){
                    throw new Error("Solo se admiten archivos .jpeg .jpg .png .gif")
            }
        }
        return true
    })
 
    ]
}
 
