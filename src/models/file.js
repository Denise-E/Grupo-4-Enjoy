const path = require("path");
const fs = require("fs");

const model = {
    file: path.resolve(__dirname, "../data", "files.json"),
    read: () => fs.readFileSync(model.file),
    write: data => fs.writeFileSync(model.file, JSON.stringify(data,null,2)),
    all: () => JSON.parse(model.read()),
    // Para linkear base de datos con form de creación de productos :
    generate: data => Object({
        id: model.all().length == 0 ? 1 : model.all().pop().id + 1,
        url: data.filename,
        
    }),    
    create: data => {
        let newImage = model.generate(data);
        let all = model.all();
        all.push(newImage);
        model.write(all);
        return newImage;
    },
    }

module.exports = model;