module.exports= (Sequelize,Datatypes) => {
  const alias = "Category" //sirve para consultar o pedir datos sobre una tabla.
  const cols = {
  id:{
      primaryKey:true,
      autoIncrement:true, 
      type: Datatypes.INTEGER,
  },
  category:{
      notNull:false,
      type: Datatypes.STRING,
  },

  
  }
  
   const config = {
       timestamps: false, 
       tableName: 'Categories'
  
   }
  
   
  const Category = Sequelize.define(alias,cols,config)

  Category.associate = function(models){
      Category.hasMany(models.Product, {
          as:"productos",
          foreignKey:"idCategories"
      }
        )
  }


  return Category
  }