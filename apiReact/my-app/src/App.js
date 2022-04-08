import React ,{Component} from "react";
import Encabezado from './components/header';
import Products from './components/products';
import Users from './components/users';
import Totalusers from './components/totalUsers';
import Totalproducts from './components/totalProducts';



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
  
      <Products />
      <Totalproducts/> 
      <Users /> 
      <Totalusers/> 

        
    </div>
    
  
    </>
    

    );
  }
}

export default App;

