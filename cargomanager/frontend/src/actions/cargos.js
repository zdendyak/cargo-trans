import axios from 'axios';
import { tokenConfig } from './auth';
import { createMessage, returnErrors } from './messages';

import  { GET_CARGOS, DELETE_CARGO, ADD_CARGO, GET_ERRORS } from './types';

export const getCargos = (all = false) => (dispatch, getState) => {
  const path = all ? '/api/cargos' : '/api/my-cargos/';
  const options = all ? undefined : tokenConfig(getState);
  axios.get(path, options)
    .then(res => {
      dispatch({
        type: GET_CARGOS,
        payload: res.data
      })
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addCargo = (cargo) => (dispatch, getState) => {
  axios.post('/api/cargos/', cargo, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addCargo: 'CARGO ADDED'}));
      dispatch({
        type: ADD_CARGO,
        payload: res.data
      })
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const deleteCargo = (id) => (dispatch, getState)=> {
  axios.delete(`/api/cargos/${id}/`, tokenConfig(getState))
    .then(() => {
      dispatch(createMessage({ deleteCargo: 'CARGO DELETED'}));
      dispatch({
        type: DELETE_CARGO,
        payload: id
      })
    })
    .catch(err => console.log(err));
};
