module.exports= (Sequelize,Datatypes) => {
  const alias = "User" //sirve para consultar o pedir datos sobre una tabla.
  const cols = {
  id:{
      primaryKey:true,
      autoIncrement:true, 
      type: Datatypes.INTEGER,
  },
  firstName:{
      notNull:false,
      type: Datatypes.STRING,
  },
  lastName:{
      notNull:false,
      type: Datatypes.STRING,
  },
  email:{
      notNull:false,
      type: Datatypes.STRING,
      unique:true,
  },
  password:{
      notNull:false,
      type: Datatypes.STRING,
  },
  isAdmin:{
    notNull:true,
    type: Datatypes.INTEGER,
  },
  isActive:{
    notNull:true,
    type: Datatypes.INTEGER,
  },
  idFiles :{
      type: Datatypes.INTEGER,
  },

  
  }
  
   const config = {
       timestamps: false, //son las columnas de created_at y updated_at. (si lo utiizamos va true, sino queda false)
       tableName: 'users'
  
   }
  
   
  const User = Sequelize.define(alias,cols,config)

  
  User.associate=function(models){
    User.hasMany(models.Coment, {
        as:"coment",
        foreignKey:"idUsers"
    })
    User.belongsTo(models.File, {
        as:"File",
        foreignKey:"idFiles"
    })
  }


  return User
  }