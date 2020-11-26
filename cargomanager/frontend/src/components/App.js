import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from './layout/Header';
import Alerts from './layout/Alerts';
import PrivateRoute from './common/PrivateRoute';
import Login from './accounts/Login';
import Register from './accounts/Register';
import Dashboard from './cargos/Dashboard';
import CargoDashboard from './cargos/Dashboard';
import TransportDashboard from './transports/Dashboard';

import { Provider } from 'react-redux';
import { positions, Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import store from '../store';
import { loadUser } from '../actions/auth';

const alertOptions = {
  timeout: 3000,
  position: positions.BOTTOM_RIGHT
};

class App extends Component {
  componentDidMount () {
    store.dispatch(loadUser());
  }

  render () {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} { ...alertOptions } >
          <Router>
            <Fragment>
              <Header />
              <Alerts />
              <div className="container-fluid">
                <Switch>
                  <PrivateRoute exact path="/" component={Dashboard} />
                  <PrivateRoute exact path="/cargos" component={CargoDashboard} />
                  <PrivateRoute exact path="/transports" component={TransportDashboard} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </Fragment>

          </Router>
        </AlertProvider>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));