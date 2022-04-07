const validator = require('express-validator');

module.exports ={
    login: [
        validator.body("password").notEmpty().withMessage("Este campo es obligatorio"),
        validator.body("email").notEmpty().withMessage("Este campo es obligatorio"),
    ],
    register: [
        validator.body("firstName").notEmpty().withMessage("Debe tener como mínimo 2 caracteres").isLength({min:2}),
        validator.body("lastName").notEmpty().withMessage("Debe tener como mínimo 2 caracteres").isLength({min:2}),
    
        validator.body("email").notEmpty().withMessage("Ingrese un formato de email valido").isEmail(),
        validator.body("password").notEmpty().withMessage("Debe tener como mínimo 8 caracteres").isLength({min:8}),
        validator.body('image').custom((value,{req})=>{
            if (!req.file) {throw new Error("La imagen es obligatoria.")}
            else {
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
 
