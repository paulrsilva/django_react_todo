import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import history from "../../history";

import {toggleTodo, getTodo} from "../../actions/todos";
import TodoForm from "./TodoForm";
import _ from "lodash";

class TodoToggle extends Component {
    componentDidMount() {
        this.props.getTodo(this.props.match.params.id);
    }

    onSubmit = formValues => {
        this.props.toggleTodo(this.props.match.params.id, {'id':this.props.match.params.id });
    };

  render() {
    const {id} = this.props.match.params;
    this.props.toggleTodo(id);
    return (
      <div className='ui container'>
        <h2 style={{ marginTop: '2rem' }}>Edit Todo</h2>
        <TodoForm
          initialValues={_.pick(this.props.todo, 'task')}
          enableReinitialize={true}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  todo: state.todos[ownProps.match.params.id]
});

export default connect(
  mapStateToProps,
  { getTodo, toggleTodo }
)(TodoToggle);