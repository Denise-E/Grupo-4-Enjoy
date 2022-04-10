import React, {Component } from 'react';
import {TiPlus } from 'react-icons/ti';
class Productlast extends Component {
   
  constructor(props){
    super(props);
    this.state ={
        id: null,
        
    }
  }

 
componentDidMount(){
      fetch('http://localhost:3000/api/last/product/')
      .then(res => res.json())
      .then(data => {
          this.setState({id: data.id})
        })     
      .catch(err => console.log(err))
      console.log('Inicia', this.state.id)
  }

componentDidUpdate(){
      fetch('http://localhost:3000/api/last/product/')
      .then(res => res.json())
      .then(data => {
          this.setState({id: data.id})
        })        
      .catch(err => console.log(err))
      console.log('Actualiza', this.state.id)
  }
  render (){
    console.log ('id', this.state.id)
  return (
       <>
       <div className='card'>
       <p className='icono'><TiPlus/> </p>    
       <h2 className= 'tituloC'>Último producto cargado</h2>
        
     <ul>
        <li> 
            <p>{this.state.id}</p>
            
            
        </li>
        
    </ul> 
          </div> 
      </> 
    )
}
      }
      
      export default Productlast;