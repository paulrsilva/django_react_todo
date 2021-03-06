import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {getTodos, deleteTodo, toggleTodo} from "../../actions/todos";

class TodoList extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    return (
        <div className='ui relaxed divided list' style={{ marginTop: '2rem' }}>
          {this.props.todos.map(todo => (
              <div className='item' key={todo.id}>
                <div className='right floated content'>

                  <Link
                      to={`/edit/${todo.id}`}
                      className='ui icon button'
                  >
                    <i className="edit outline icon"> </i>
                  </Link>
                  <Link
                      to={`/delete/${todo.id}`}
                      className='ui icon button'
                  >
                    <i className="trash alternate outline red icon"> </i>
                  </Link>
                </div>

                {/*<i className='large calendar outline middle aligned icon' />*/}

                <i className={ todo.done ? 'large check circle outline green icon middle aligned icon': 'large calendar outline middle aligned icon'} />

                <div
                    onClick={e => toggleTodo(this.props.toggleTodo(todo.id))}
                    className='content'

                    style={{textDecoration: todo.done ? 'line-through' : null }} >
                    {todo.task}
                  <div className='description'>{todo.created_at}</div>
                </div>
              </div>
          ))}
        </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: Object.values(state.todos)
});

export default connect(
    mapStateToProps,
    { getTodos, deleteTodo, toggleTodo }
)(TodoList);
