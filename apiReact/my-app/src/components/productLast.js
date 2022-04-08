import React, {Component } from 'react';

class Productlast extends Component {
   
        constructor(props){
            super(props);
            this.state ={
            product: null,
             
            }
          }
          componentDidMount(){
            fetch (`http://localhost:3000/last/product`)
            .then (res=>res.json())
            .then (data => {
                this.setState({product: data.last})
            })
            .catch(err => console.log(err))
          }
        
          componentDidUpdate(){
            fetch (`http://localhost:3000/api/last/product`)
            .then (res=>res.json())
            .then (data => {
                this.setState({product: data.last})
            })
            .catch(err => console.log(err))
          }
      
        render (){
          console.log ('product', this.state.product)
          return (<>
          <h3> Último producto cargado:</h3>
          <p>{this.state.id}</p>  
            
         
          </>
          
      
          );
        }
      }
      
      export default Productlast;