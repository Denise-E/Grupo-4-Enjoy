const path = require("path");
const fs = require("fs");
const file = require ("./file");

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
        image: data.file.map(f => file.create(f).id),
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
    store: data => {
        let all = model.all()
        let id = all.length > 0 ? all[all.length - 1].id + 1 : 1
        let product = {id:id, ...data}
        all.push(product)
        fs.writeFileSync(path.resolve(__dirname, "../data/products.json"), JSON.stringify(all,null,2))
        return product
    },
    editarProducto: (id,data) =>{
        let all = model.all();
        let updated = all.map (e =>{
            if(e.id == id){
                e.name = data.name;
                e.description = data.description;
                e.price = data.price;
                e.resume = data.resume;
                e.title = data.title;
                e.location = data.location;
                e.persons = data.persons;
                e.category = data.category;
                return e
            }
            return e
        })
        model.write(updated);
        let product = model.search ("id", id);
        return product
    }
    
}

module.exports = model;