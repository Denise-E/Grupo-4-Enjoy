module.exports= (Sequelize,DataTypes) => {
const alias = "Modelo" //sirve para consultar o pedir datos sobre una tabla.
const cols = {
id:{
    primaryKey:true,
    autoIncrement:true, 
    type: Datatypes.INTEGER,
},
id:{
    primaryKey:true,
    autoIncrement:true, 
    type: Datatypes.INTEGER,
},

    }
 const config = {
     timestamps: false, //son las columnas de created_at y updated_at. (si lo utiizamos va true, sino queda false)

 }

 
const Modelo = Sequelize.define(alias,cols,config)
return Modelo
}
