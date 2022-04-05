const validator = require('express-validator');
const path = require('path');

module.exports ={ 
    create: [
        validator.body("name").notEmpty().isLength({min:5}).withMessage("Debe tener como mínimo 5 caracteres"),
        validator.body("description").notEmpty().isLength({min:20}).withMessage("Debe tener como mínimo 20 caracteres"),
        validator.body("resume").notEmpty().withMessage("Este campo es obligatorio"),
        validator.body("title").notEmpty().withMessage("Este campo es obligatorio"),
        validator.body("location").notEmpty().withMessage("Este campo es obligatorio"),
        validator.body("price").notEmpty().withMessage("Este campo es obligatorio"),
        validator.body("persons").notEmpty().withMessage("Este campo es obligatorio"),
        /*validator.body('file').custom((value,{req})=>{
            if (!req.file) {throw new Error("Este campo es obligatorio.")}
            else {
                let allowedExtensions = ['.jpeg','.jpg','.gif','.png'];
                let file = req.file
                let fileExtension = path.extname(file.originalname)
                if(!allowedExtensions.includes(fileExtension)){
                    throw new Error("El fromato de la imagen debe ser jpg, jpeg, png o gif")
            }
        }
        return true
    })*/
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