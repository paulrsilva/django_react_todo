import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
          <div className='ui inverted menu' style={{ borderRadius: '0' }}>
            <a className='header item'>GTD Paul</a>
            <a className='item'>Tarefas</a>
            <a className='item'>Projetos</a>
            <a className='item'>Contextos</a>
          </div>
        )
    }
}

export default Header;