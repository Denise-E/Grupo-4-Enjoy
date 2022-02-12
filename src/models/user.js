const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');
const validator = require('express-validator');

const model = {
    file: path.resolve(__dirname, '../data/user.json'),
    write: data => fs.writeFileSync(model.file, JSON.stringify(data,null,2)),
    read: data => fs.readFileSync(model.file),
    all: () => JSON.parse(model.read()),
    search: (prop,value) => model.all().find(element => element[prop] == value),
    generated: data => Object({
        id: model.all().length == 0 ? 1 : model.all().pop().id + 1,
        firstName: data.firstName,
        lastName: data.lastName,
        email: String(data.email),
        password: bcrypt.hashSync(data.password, 10), 
        image: data.image  ? data.image : "default.png",
        isAdmin: String(data.email).includes("@enjoy.com"),
        isActive: true,
    }),
    create: data => {
        let all = model.all();
        let newUser = model.generated(data);
        all.push(newUser);
        model.write(all);
        return newUser;
    },
    delete: id => {
        let deleted = model.all().filter(e => e.id != id)
        model.write(deleted)
    },
    validate: [
        validator.body("email").isEmail().withMessage("El email es inválido"),
        validator.body("password").isLength({min:8}).withMessage("Mínimo 8 caracteres")
    ],
    editarUsuario: (id,data) =>{
        let all = model.all();
        let updated = all.map (e =>{
            if(e.id == id){
                e.firstName = data.firstName;
                e.lastName = data.lastName;
                e.email = data.email;
                e.password = data.password;
                e.image = data.image;
                
                return e
            }
            return e
        })
        model.write(updated);
        let user = model.search ("id", id);
        return user
    }
}

module.exports = model;