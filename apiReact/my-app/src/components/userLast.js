import {useState,useEffect,Fragment} from 'react'


function UserLatest ({title}){
  
    const [latest,setLatest] = useState([]);
     
      useEffect(() => {
          fetch('http://localhost:3001/api/last/user/')
          .then(res => res.json())
          .then(data => setLatest(data.last))        
          console.log('Inicia')
      },[latest])
  
      useEffect(() => {
          fetch('http://localhost:3001/api/last/user/')
          .then(res => res.json())
          .then(data => setLatest(data.last))        
          console.log('Actualiza')
      },[])
  
      return (
         
           <Fragment>
  
          <h2>Último usuario creado</h2>
  
         <ul>
                         
               <p> {latest.id} </p>
               <p> {latest.name} </p>
               <p> {latest.email} </p>
                             
               
            
        </ul> 
               
          </Fragment> 
      
  
      )
   }
  
         
  
  
  export default UserLatest;

