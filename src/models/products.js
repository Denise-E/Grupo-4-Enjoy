const path = require("path");
const fs = require("fs");

const model = {
    file: path.resolve(__dirname, "../data/products.json"),
    read: () => fs.readFileSync(model.file),
    write: data => fs.writeFileSync(model.file, JSON.stringify(data,null,2)),
    all: () => JSON.parse(model.read()),
    // Para linkear base de datos con form de creación de productos :
    generate: data => Object({
        id: model.all().length == 0 ? 1 : model.all().pop().id + 1,
        name: data.name,
        price: parseInt(data.price),
        offert: data.offert ? true : false,
    }),    
    create: data => {
        let newProduct = model.generate(data);
        let all = model.all();
        all.push(newProduct);
        model.write(all);
        return newProduct;
    },
    search: (field, value) => model.all().find(element => element[field] == value),
    delete: id => {
        let deleted = model.all().filter(e => e.id != id)
        model.write(deleted)
    },
}

module.exports = model;