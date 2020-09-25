import axios from 'axios';

import  { GET_CARGOS, DELETE_CARGO, ADD_CARGO } from './types';

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
      dispatch({
        type: ADD_CARGO,
        payload: res.data
      })
    })
    .catch(err => console.log(err));
};

export const deleteCargos = (id) => dispatch => {
  axios.delete(`/api/cargos/${id}/`)
    .then(() => {
      dispatch({
        type: DELETE_CARGO,
        payload: id
      })
    })
    .catch(err => console.log(err));
};
