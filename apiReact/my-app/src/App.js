import React ,{Component} from "react";
import Encabezado from './components/header';
import Productstable from './components/tableProducts';

import Totalusers from './components/totalUsers';
import Totalproducts from './components/totalProducts';
import Productlast from './components/productLast';
import Userlast from './components/userLast';
import StickyHeadTable from './components/table';



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
      <h2 className="margen"> Detalle de todos los productos </h2>
      <Productstable />
      <h2 className="margen"> Detalle de todos los usuarios </h2>
      <StickyHeadTable />
      
      

        
    </div>
    
  
    </>
    

    );
  }
}

export default App;

