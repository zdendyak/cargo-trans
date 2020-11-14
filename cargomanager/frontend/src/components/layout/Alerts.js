import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };

  componentDidUpdate (prevProps) {
    const { error, message, alert } = this.props;
    if (error !== prevProps.error) {
      console.log('ERROR', error)
      Object.keys(error.msg).forEach(key => {
        const msg = Array.isArray(error.msg[key]) ? error.msg[key].join() : error.msg[key];
        if (key === 'non_field_errors') {
          alert.error(msg);
        } else {
          const normKey = key.split('_').join(' ');
          alert.error(`${normKey}: ${msg}`);
        }
      });
    }

    if (message !== prevProps.message) {
      Object.keys(message).forEach(key => {
        if (key.startsWith('error')) {
          allert.error(message[key]);
        } else {
          alert.success(message[key]);
        }
      });
    }
  }

  render() {
    return (<Fragment />);
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
