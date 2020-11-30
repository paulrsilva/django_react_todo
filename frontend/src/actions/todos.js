import axios from 'axios';
import {reset} from "redux-form";
import history from "../history";
import { GET_TODOS,ADD_TODO, GET_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from './types';

import { tokenConfig} from "./auth";

// TOOGLE TODO
export const toggleTodo = id => async (dispatch, getState) => {
  const res = await axios.post('/api/todos/toggle/', {id:id}, tokenConfig(getState));
  dispatch({
      type: TOGGLE_TODO,
      payload: res.data
  });
  history.push('/');
}

// EDIT TODO
export const editTodo = (id, formValues) => async (dispatch, getState) => {
  const res = await axios.patch(`/api/todos/${id}/`, formValues, tokenConfig(getState));
  dispatch({
    type: EDIT_TODO,
    payload: res.data
  });
  history.push('/');
};

// GET TODO
export const getTodo = id => async (dispatch, getState) => {
  const res = await axios.get(`/api/todos/${id}/`, tokenConfig(getState));
  dispatch({
    type: GET_TODO,
    payload: res.data
  });
};

// DELETE TODO
export const deleteTodo = id => async (dispatch, getState) => {
  await axios.delete(`/api/todos/${id}/`, tokenConfig(getState));
  dispatch({
    type: DELETE_TODO,
    payload: id
  });
  history.push('/');
};

// ADD TODO
export const addTodo = formValues => async (dispatch, getState) => {
  const res = await axios.post('/api/todos/', { ...formValues }, tokenConfig(getState));
  dispatch({
    type: ADD_TODO,
    payload: res.data
  });
  dispatch(reset('todoForm'));
};

// GET TODOS
export const getTodos = () => async (dispatch, getState) => {
  const res = await axios.get('/api/todos/', tokenConfig(getState) );
  dispatch({
    type: GET_TODOS,
    payload: res.data
  });
};

