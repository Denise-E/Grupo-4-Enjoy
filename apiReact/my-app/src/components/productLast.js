import React, {Component } from 'react';
import {TiPlus } from 'react-icons/ti';
class Productlast extends Component {
   
  constructor(props){
    super(props);
    this.state ={
        id: null,
        name: null,
        title: null,
        description: null,
        resume: null,
        location: null,
        persons: null,
        price: null,
        fees: null,
        starsAvg: null,
        category: null,
        imageURL: null,
    }
  }

 
componentDidMount(){
      fetch('http://localhost:3000/api/last/product/')
      .then(res => res.json())
      .then(data => {
          this.setState({
            id: data.id,
            name: data.name,
            title: data.title,
            description: data.description,
            resume: data.resume,
            location: data.location,
            persons: data.persons,
            price: data.price,
            category: data.category,
            
          })
        })     
      .catch(err => console.log(err))
      console.log('Inicia', this.state.id)
  }

componentDidUpdate(){
      fetch('http://localhost:3000/api/last/product/')
      .then(res => res.json())
      .then(data => {
          this.setState({
            id: data.id,
            name: data.name,
            title: data.title,
            description: data.description,
            resume: data.resume,
            location: data.location,
            persons: data.persons,
            price: data.price,
            fees: data.fees,
            starsAvg: data.startsAvg,
            category: data.category,
            imageURL: data.imageUrl,
          })
        })        
      .catch(err => console.log(err))
      console.log('Actualiza', this.state.id)
  }
  render (){
    console.log ('id', this.state.id)
  return (
       <>
       <div className='cardLastP'>
       <p className='icono'><TiPlus/> </p>    
       <h2 className= 'tituloD'>Último producto cargado</h2>
        
     <ul>
        <li> 
            <p className="marg">ID: {this.state.id}</p>
            <p className="marg"> Nombre del producto: {this.state.name}</p>
            <p className="marg"> Título del producto: {this.state.title}</p>
            <p className="marg"> Resumen: {this.state.resume}</p>
            <p className="marg">Locación: {this.state.location}</p>
            <p className="marg">Cantidad de personas: {this.state.persons}</p>
            <p className="marg" >Precio: {this.state.price}</p>
            <p className="marg">Categoría: {this.state.category}</p>
            
            
            
        </li>
        
    </ul> 
          </div> 
      </> 
    )
}
      }
      
      export default Productlast;