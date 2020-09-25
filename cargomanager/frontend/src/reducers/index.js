import { combineReducers } from 'redux';
import cargos from './cargos';
import errors from './errors';
import messages from './messages';

export default combineReducers({
  cargos,
  errors,
  messages
});
