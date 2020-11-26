import { combineReducers } from 'redux';
import cargos from './cargos';
import transports from './transports';
import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
  cargos,
  transports,
  errors,
  messages,
  auth
});
