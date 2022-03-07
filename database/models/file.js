module.exports= (Sequelize,Datatypes) => {
  const alias = "File" //sirve para consultar o pedir datos sobre una tabla.
  const cols = {
  id:{
      primaryKey:true,
      autoIncrement:true, 
      type: Datatypes.INTEGER,
  },

  type:{
      notNull:false,
      type: Datatypes.STRING,
  },
  url:{
      notNull:false,
      type: Datatypes.STRING,
  },
  
  }
  
   const config = {
       timestamps: false, 
       tableName: 'Files'
  
   }
  
   
  const File = Sequelize.define(alias,cols,config)

  File.associate=function(models){
    File.belongsTo(models.Producto, {
        as:"producto",
        foreignKey:"idFiles"
    }
      )
  }
  return File
  }