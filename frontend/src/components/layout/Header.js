import React, { Component } from 'react';

import { Link } from 'react-router-dom'; // added
import { connect } from 'react-redux'; // added
import { logout } from '../../actions/auth'; // added

class Header extends Component {
    render() {
        const { user, isAuthenticated } = this.props.auth; // added

        // added
        const userLinks = (
          <div className='right menu'>
            <div className='ui simple dropdown item'>
              {user ? user.username : ''}
              <i className='dropdown icon' />
              <div className='menu'>
                <a onClick={this.props.logout} className='item'>
                  Logout
                </a>
              </div>
            </div>
          </div>
        );

        // added
        const guestLinks = (
          <div className='right menu'>
            <Link to='/register' className='item'>
              Sign Up
            </Link>
            <Link to='/login' className='item'>
              Login
            </Link>
          </div>
        );

        return(
          <div className='ui inverted menu' style={{ borderRadius: '0' }}>
            <Link to='/' className='header item'>
                GTD Paul
            </Link>
            <Link to='/' className='item'>
                Tarefas
            </Link>
            <Link to='/projetos' className='item'>
                Projetos
            </Link>
            <Link to='/contextos' className='item'>
                Contextos
            </Link>
            <Link to='/forecast' className='item'>
                Forecast
            </Link>
            <a className='item'>Info</a>
           {isAuthenticated ? userLinks : guestLinks}
          </div>
        );
    }
}

const mapStateToProps = state => ({
  auth: state.auth
});

// updated
export default connect(
  mapStateToProps,
  { logout }
)(Header);