import React, {Component } from 'react';

class userLast extends Component {
   
    constructor(props){
        super(props);
        this.state ={
            last: null,
        }
      }

     
    componentDidMount(){
          fetch('http://localhost:3000/api/last/user/')
          .then(res => res.json())
          .then(data => {
              this.setState({last: data.last})
            })     
          .catch(err => console.log(err))
          console.log('Inicia', this.state.last)
      }
  
    componentDidUpdate(){
          fetch('http://localhost:3000/api/last/user/')
          .then(res => res.json())
          .then(data => {
              this.setState({last: data.last})
            })        
          .catch(err => console.log(err))
          console.log('Actualiza', this.state.last)
      }
      render (){
        console.log ('user', this.state.last)
      return (
           <>
           <div className='card'>    
          <h2>Último usuario registrado</h2>
            
         <ul>
            <li>
                <p>{this.state.last}</p>
            </li>
            
        </ul> 
              </div> 
          </> 
        )
    }
   }
  
         
  
  
  export default userLast;

