import axios from 'axios';
import {reset} from "redux-form";
import history from "../history";
import { GET_TODOS,ADD_TODO, GET_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from './types';

// TOOGLE TODO
export const toggleTodo = id => async dispatch => {
  const res = await axios.post('/api/todos/toggle/', {id:id});
  dispatch({
      type: TOGGLE_TODO,
      payload: res.data
  });
  // history.push('/');
}

// EDIT TODO
export const editTodo = (id, formValues) => async dispatch => {
  const res = await axios.patch(`/api/todos/${id}/`, formValues);
  dispatch({
    type: EDIT_TODO,
    payload: res.data
  });
  history.push('/');
};

// GET TODO
export const getTodo = id => async dispatch => {
  const res = await axios.get(`/api/todos/${id}/`);
  dispatch({
    type: GET_TODO,
    payload: res.data
  });
};

// DELETE TODO
export const deleteTodo = id => async dispatch => {
  await axios.delete(`/api/todos/${id}/`);
  dispatch({
    type: DELETE_TODO,
    payload: id
  });
  history.push('/');
};

// ADD TODO
export const addTodo = formValues => async dispatch => {
  const res = await axios.post('/api/todos/', { ...formValues });
  dispatch({
    type: ADD_TODO,
    payload: res.data
  });
  dispatch(reset('todoForm'));
};

// GET TODOS
export const getTodos = () => async dispatch => {
  const res = await axios.get('/api/todos/');
  dispatch({
    type: GET_TODOS,
    payload: res.data
  });
};

