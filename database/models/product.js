module.exports= (Sequelize,Datatypes) => {
  const alias = "Producto" 
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
  Producto.associate=function(models){
    Producto.hasMany(models.category, {
        as:"category",
        foreignKey:"idCategories"
    }
      )
}

Producto.associate=function(models){
  Producto.hasMany(models.File, {
      as:"file",
      foreignKey:"idFiles"
  }
    )
}

Producto.associate=function(models){
    Producto.belongsTo(models.File, {
        as:"File",
        foreignKey:"idFiles"
    }
      )
  }

  Producto.associate=function(models){
    Producto.hasMany(models.coment, {
        as:"coment",
        foreignKey:"idProducts"
    }
      )
  }

  return Producto
  }