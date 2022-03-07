module.exports= (Sequelize,Datatypes) => {
  const alias = "Producto" //sirve para consultar o pedir datos sobre una tabla.
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
       timestamps: false, 
       tableName: 'products',
  
   }
  
   
  const Producto = Sequelize.define(alias,cols,config)
  return Producto
  }
  