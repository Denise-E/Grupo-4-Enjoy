module.exports = {
crearProducto: (req,res) => res.render("admin/crearProducto",{
        style: "admin/crearProducto"

 }),

 editarProducto: (req,res) => res.render("admin/editarProducto",{
        
    style: "admin/editarProducto"
})
}




