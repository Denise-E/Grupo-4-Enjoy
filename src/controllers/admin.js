module.exports = {
crearProducto: (req,res) => res.render("admin/crearProducto",{
        style: "crearProducto"

 }),

 editarProducto: (req,res) => res.render("admin/editarProducto",{
        
    style: "editarProducto"
})
}




