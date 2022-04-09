import React ,{Component} from "react";
import Encabezado from './components/header';
import Products from './components/products';
import Users from './components/users';
import Totalusers from './components/totalUsers';
import Totalproducts from './components/totalProducts';
import Productlast from './components/productLast';
import Userlast from './components/userLast';



import './App.css';


class App extends Component{
  constructor(props){
    super(props);
    this.state ={
     users: null,
     products:null,
     
    }
  }

  render (){
    console.log ('users', this.state.users)
    return (<>
    <div className="container">
      <Encabezado />
      <div className="firstRow">
      <Totalproducts/> 
      <Totalusers/>
      </div> 
      <Productlast/>
      <Userlast/>
      <Products />
      
      <Users /> 
      

        
    </div>
    
  
    </>
    

    );
  }
}

export default App;

