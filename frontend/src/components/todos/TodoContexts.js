import React, { Component } from 'react';

const estiloContexto = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
};

class TodoContexts extends Component {
    render(){
        return(
            <div className='ui container'>
                <h1 style={estiloContexto}> Contextos </h1>
            </div>
        );
    }
}

export default TodoContexts;