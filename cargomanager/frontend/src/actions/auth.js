import axios from 'axios';
import { returnErrors } from './messages';

import { USER_LOADING, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL } from './types';

export const loadUser = () => async (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  
  const config = tokenConfig(getState);

  try {
    const res = await axios.get('/api/auth/user', config);
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
    dispatch({ type: AUTH_ERROR })
  }
}

export const register = ({ username, password, email }) => async dispatch => {  
  const config = {
    headers: { 
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ username, password, email });

  try {
    const res = await axios.post('/api/auth/register', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
    dispatch({ type: REGISTER_FAIL })
  }
}

export const login = (username, password) => async dispatch => {  
  const config = {
    headers: { 
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ username, password });

  try {
    const res = await axios.post('/api/auth/login', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
    dispatch({ type: LOGIN_FAIL })
  }
}

export const logout = () => async (dispatch, getState) => {
  const config = tokenConfig(getState);

  try {
    await axios.post('/api/auth/logout', null, config);
    dispatch({
      type: LOGOUT_SUCCESS
    });
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
  }
}

export const tokenConfig = getState => {
  const token = getState().auth.token;
  const config = {
    headers: { 
      'Content-Type': 'application/json'
    }
  };

  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }
  return config;
}