import React ,{Component} from "react";
import Encabezado from './components/header';
import Products from './components/products';
import Users from './components/users';


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
      <Users /> 
        
    </div>
    
  
    </>
    

    );
  }
}

export default App;


//otra forma de hacerlo:
  /*   function App() {const url = "http://localhost:3000/api/users";
  const [todos, setTodos] = useState();
  const fetchApi = async () => {
    const response =  await fetch(url)    
    
    const responseJSON = await response.json()
    setTodos(responseJSON[0].users)
        
  }

useEffect(() => {
  fetchApi()
}, [])
  return (
    <div className="App">
      Hola Mundo 
      <ul>
      {!todos ? "Cargando..." :
      todos.map( (todo,index)=> {
        return <li key={index}>{todo.name}</li>
      })
    }
      </ul>
    </div>
  );
  }*/

