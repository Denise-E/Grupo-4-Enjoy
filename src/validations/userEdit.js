const path = require('path');
const validator = require('express-validator');

module.exports = {
    edit: [
        validator.body("firstName").notEmpty().isLength({min:2}).withMessage("Debe tener como mínimo 2 caracteres"),
        validator.body("lastName").notEmpty().isLength({min:2}).withMessage("Debe tener como mínimo 2 caracteres"),
        validator.body("email").notEmpty().withMessage("Escriba un email válido"),
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
 
    ]
}