module.exports= (Sequelize,Datatypes) => {
  const alias = "coment" //sirve para consultar o pedir datos sobre una tabla.
  const cols = {
  id:{
      primaryKey:true,
      autoIncrement:true, 
      type: Datatypes.INTEGER,
  },

  experience:{
      notNull:false,
      type: Datatypes.STRING,
  },
  commment:{
      notNull:false,
      type: Datatypes.STRING,
  },
  starts :{
      notNull:false,
      type: Datatypes.INTEGER,
  },
  
  }
  
   const config = {
       timestamps: false, 
       tableName: 'Coments'
  
   }
  
   
  const coment = Sequelize.define(alias,cols,config)

  coment.associate=function(models){
    coment.BelongsTo(models.User, {
        as:"User",
        foreignKey:"idUsers"
    }
      )
  }

  coment.associate=function(models){
    coment.BelongsTo(models.Producto, {
        as:"Producto",
        foreignKey:"idProducts"
    }
      )
  } 
  return coment
  }