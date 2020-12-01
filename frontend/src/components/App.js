import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Router addictions to the delete redux  function
import {Router, Route, Switch} from 'react-router-dom'
import history from "../history";
import TodoDelete from "./todos/TodoDelete";
import TodoEdit from "./todos/TodoEdit";
// import TodoToggle from "./todos/TodoToggle";
import TodoProjects from "./todos/TodoProjects";
import TodoContexts from "./todos/TodoContexts";

import Header from "./layout/Header";
import Dashboard from "./todos/Dashboard";
import { Provider } from 'react-redux';
import store from "../store";

import LoginForm from './auth/LoginForm'; // Login
import PrivateRoute from './common/PrivateRoute'; // Login
import { loadUser } from '../actions/auth'; // Login

import RegisterForm from "./auth/RegisterForm";

class App extends Component {

  // Login
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
          <Router history={history}>
            <Header/>
              <Switch>
                <PrivateRoute exact path='/' component={Dashboard} />
                <Route exact path='/delete/:id' component={TodoDelete} />
                <Route exact path='/edit/:id' component={TodoEdit} />
                <Route exact path='/register' component={RegisterForm} />
                <Route exact path='/login' component={LoginForm} />
                <Route exact path='/projetos' component={TodoProjects} />
                <Route path='/contextos' component={TodoContexts} />
              </Switch>
          </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));