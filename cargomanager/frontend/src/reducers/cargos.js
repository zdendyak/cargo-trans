import { ADD_CARGO, DELETE_CARGO, GET_CARGOS } from '../actions/types.js';

const initialState = {
  cargos: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CARGOS: 
      return {
        ...state,
        cargos: action.payload
      }
    case DELETE_CARGO:
      return {
        ...state,
        cargos: state.cargos.filter(c => c.id !== action.payload)
      }
    case ADD_CARGO:
      return {
        ...state,
        cargos: [...state.cargos, action.payload]
      }
    default:
      return state;
  }
}