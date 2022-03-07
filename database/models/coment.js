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
  return coment
  }