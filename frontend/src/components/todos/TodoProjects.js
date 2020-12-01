import React, { Component } from 'react';
import { connect } from 'react-redux';
import estilo from '../layout/StyleProjects'

class TodoProjects extends Component{
    render(){
        return (
        <div className='ui container'>
            <h1 style={estilo.titulo}> Projetos </h1>
        </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
  todo: state.todos[ownProps.match.params.id]
});

export default connect(
    mapStateToProps, null
)(TodoProjects)