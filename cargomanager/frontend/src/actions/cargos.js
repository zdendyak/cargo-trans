import axios from 'axios';
import { createMessage } from './messages';

import  { GET_CARGOS, DELETE_CARGO, ADD_CARGO, GET_ERRORS } from './types';

export const getCargos = () => dispatch => {
  axios.get('/api/cargos/')
    .then(res => {
      dispatch({
        type: GET_CARGOS,
        payload: res.data
      })
    })
    .catch(err => console.log(err));
};

export const addCargo = (cargo) => dispatch => {
  axios.post('/api/cargos/', cargo)
    .then(res => {
      dispatch(createMessage({ addCargo: 'CARGO ADDED'}));
      dispatch({
        type: ADD_CARGO,
        payload: res.data
      })
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
    });
};

export const deleteCargos = (id) => dispatch => {
  axios.delete(`/api/cargos/${id}/`)
    .then(() => {
      dispatch(createMessage({ deleteCargo: 'CARGO DELETED'}));
      dispatch({
        type: DELETE_CARGO,
        payload: id
      })
    })
    .catch(err => console.log(err));
};
