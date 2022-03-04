module.exports= (Sequelize,Datatypes) => {
const alias = "Modelo" //sirve para consultar o pedir datos sobre una tabla.
const cols = {
id:{
    primaryKey:true,
    autoIncrement:true, 
    type: Datatypes.INTEGER,
},
name:{
    notNull:false,
    type: Datatypes.STRING,
},
title:{
    notNull:false,
    type: Datatypes.STRING,
},
description:{
    notNull:false,
    type: Datatypes.STRING,
},
resume:{
    notNull:false,
    type: Datatypes.STRING,
},
location:{
    notNull:false,
    type: Datatypes.STRING,
},
persons:{
    notNull:false,
    type: Datatypes.INTEGER,
},
expirationDate:{
    notNull:false,
    type: Datatypes.DATE,
},
price:{
    notNull:false,
    type: Datatypes.INTEGER,
},
fees:{
    notNull:false,
    type: Datatypes.INTEGER,
},
starsAvg:{
    notNull:false,
    type: Datatypes.INTEGER,
},
    }

 const config = {
     timestamps: false, //son las columnas de created_at y updated_at. (si lo utiizamos va true, sino queda false)

 }

 
const Modelo = Sequelize.define(alias,cols,config)
return Modelo
}
