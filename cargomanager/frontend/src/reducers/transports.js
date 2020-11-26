import { ADD_TRANSPORT, DELETE_TRANSPORT, GET_TRANSPORTS } from "../actions/types";

const initialState = {
  transports: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TRANSPORTS:
      return {
        ...state,
        transports: action.payload
      }
    case DELETE_TRANSPORT:
      return {
        ...state,
        transports: state.transports.filter(t => t.id !== action.payload)
      }
    case ADD_TRANSPORT:
      return {
        ...state,
        transports: [...state.transports, action.payload]
      }
    default:
      return state;
  }
}