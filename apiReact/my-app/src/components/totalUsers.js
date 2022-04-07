import React, {Component } from 'react';

class TotalUsers extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
          };
    }
    componentDidMount(){
        
        fetch("http://localhost:3001/api/users" )
                .then(res => res.json())
                .then(data => {
                        
                        this.setState(
                            {
                                count: data.meta.count,
                                                    
                            }
                        )})

                .catch(error => console.log(error));
        
    }

    
    render () {
        return (

            <>
                
                                    <div className="text-xs">Cantidad de usuarios</div>
                                    <div className="h5">{this.state.count}</div>
                               
            </>            
        );
    }
}

export default TotalUsers;