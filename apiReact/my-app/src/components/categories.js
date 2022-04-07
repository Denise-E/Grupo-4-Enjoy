/*import {useState,useEffect} from 'react'


function Categories ({title}){
  
  const [category] = useState([]); 
   
    useEffect(() => {
        fetch('http://localhost:3001/api/products/')
        .then(res => res.json())
        .then( countByCategory => category(countByCategory.data))        
        console.log('Inicia')
    },[])

    useEffect(() => {
        fetch('http://localhost:3001/api/products/')
        .then(res => res.json())
        .then(countByCategory => category(countByCategory.data))        
        console.log('Actualiza')
    },[])

    let gastronomia = this.state.countByCategory
    let aventura = this.state.countByCategory
    

    return (
       
     <section>
         <h2>Categorías</h2>
        
        <ul>
        <li>Gastronomia: {gastronomia}</li>
        <li>Aventura: {aventura}</li> 
         
              
           
       </ul> 
     </section>

        
             
       
    

    )
 }

       


export default Categories; */