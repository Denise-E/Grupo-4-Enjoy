const path = require("path");
const fs = require("fs");

const model = {
    file: path.resolve(__dirname, "../data/categories.json"),
    read: () => fs.readFileSync(model.file),
    write: data => fs.writeFileSync(model.file, JSON.stringify(data,null,2)),
    all: () => JSON.parse(model.read()),
    search: (field, value) => model.all().find(element => element[field] == value),
}

module.exports = model;