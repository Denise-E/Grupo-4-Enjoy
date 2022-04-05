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
        validator.body('file').custom((value,{req})=>{
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
    ],
    edit:[
        validator.body("name").notEmpty().withMessage("Debe tener como mínimo 5 caracteres").isLength({min:5}),
        validator.body("description").notEmpty().withMessage("Debe tener como mínimo 20 caracteres").isLength({min:20}),
        validator.body("resume").notEmpty().withMessage("Este campo es obligatorio"),
        validator.body("title").notEmpty().withMessage("Este campo es obligatorio"),
        validator.body("location").notEmpty().withMessage("Este campo es obligatorio"),
        validator.body("price").notEmpty().withMessage("Este campo es obligatorio"),
        validator.body("persons").notEmpty().withMessage("Este campo es obligatorio"),
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