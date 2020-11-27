import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Router addictions to the delete redux  function
import {Router, Route, Switch} from 'react-router-dom'
import history from "../history";
import TodoDelete from "./todos/TodoDelete";

import Header from "./layout/Header";
import Dashboard from "./todos/Dashboard";
import { Provider } from 'react-redux';
import store from "../store";



class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Router history={history}>
            <Header/>
            <Dashboard />
          </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));