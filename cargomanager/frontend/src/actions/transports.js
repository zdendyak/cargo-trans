import axios from 'axios'
import { tokenConfig } from './auth'
import { createMessage, returnErrors } from './messages'
import { ADD_TRANSPORT, DELETE_TRANSPORT, GET_TRANSPORTS } from './types'


export const getTransports = (all = false) => (dispatch, getState) => {
  const path = all ? '/api/transports' : '/api/my-transports';
  const options = all ? undefined : tokenConfig(getState);
  axios.get(path, options)
    .then(res => {
      dispatch({
        type: GET_TRANSPORTS,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getMyTransports = () => (dispatch, getState) => {
  axios.get('/api/my-transports', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_TRANSPORTS,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const addTransport = transport => (dispatch, getState) => {
  axios.post('/api/transports/', transport, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addTransport: 'TRANSPORT ADDED' }));
      dispatch({
        type: ADD_TRANSPORT,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const deleteTransport = id => (dispatch, getState) => {
  axios.delete(`/api/transports/${id}/`, tokenConfig(getState))
    .then(() => {
      dispatch(createMessage({ deleteTransport: 'TRANSPORT DELETED' }));
      dispatch({
        type: DELETE_TRANSPORT,
        payload: id
      });
    })
}