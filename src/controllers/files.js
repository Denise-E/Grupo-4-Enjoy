
const file = require("../models/file");



module.exports = {
    upload: (req,res) => res.render ("files/upload", {
        style: "files/upload"
    }),
    store: (req,res) => res.send (req.files.map(f => file.create (f))),
}