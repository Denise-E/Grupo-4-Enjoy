import React, {Component } from 'react';
import { FaStoreAlt } from 'react-icons/fa';

class Totalproducts extends Component {
   
        constructor(props){
            super(props);
            this.state ={
            count: null,
             
            }
          }
          componentDidMount(){
            fetch (`http://localhost:3000/api/products/`)
            .then (res=>res.json())
            .then (data => {
                this.setState({count: data.count})
            })
            .catch(err => console.log(err))
          }
        
          componentDidUpdate(){
            fetch (`http://localhost:3000/api/products/`)
            .then (res=>res.json())
            .then (data => {
                this.setState({count: data.count})
            })
            .catch(err => console.log(err))
          }
      
        render (){
          console.log ('users', this.state.count)
          return (<>
          <div class='card'>
          <p class='icono'><FaStoreAlt /> </p>
          <h2 class= 'tituloC'> Cantidad total de productos</h2>
          <p class='numero'>{this.state.count}</p> 
          
          </div>
          
          </>
          
      
          );
        }
      }
      
      export default Totalproducts;