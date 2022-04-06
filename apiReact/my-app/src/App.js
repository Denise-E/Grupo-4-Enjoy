import React ,{Component} from "react";
import './App.css';
class App extends Component{
  constructor(props){
    super(props);
    this.state ={
     users: null
    }
  }
  componentDidMount(){
    fetch (`http://localhost:3000/api/users/`)
    .then (res=>res.json())
    .then (data => {
        this.setState({users: data.users})
    })
    .catch(err => console.log(err))
  }

  componentDidUpdate(){
    console.log('actualizado')
  }

  render (){
    console.log ('users', this.state.users)
    return (<>
    <h1> hola Mundo!</h1>
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

