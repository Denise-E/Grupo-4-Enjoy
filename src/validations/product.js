const validator = require('express-validator');


 validator.body("name").notEmpty().isLength({min:5}).withMessage("Debe tener como mínimo 5 caracteres");
 validator.body("description").notEmpty().isLength({min:20}).withMessage("Debe tener como mínimo 20 caracteres");
 validator.body("file").notEmpty().contains(['.jgp', '.jpeg', '.png', '.gif']);
 validator.body("resume").notEmpty();
 validator.body("title").notEmpty();
 validator.body("location").notEmpty();
 validator.body("price").notEmpty();
 validator.body("persons").notEmpty();


