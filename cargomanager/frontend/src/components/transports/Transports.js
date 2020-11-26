import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTransports } from '../../actions/transports';

export class Transports extends Component {

  static propTypes = {
    transports: PropTypes.array.isRequired,
    getTransports: PropTypes.func.isRequired
  }

  componentDidMount () {
    this.props.getTransports();
  }

  render() {
    return (
      <Fragment>
        <h2>Transports</h2>
        <div className="table-responsive-md">

          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>From</th>
                <th>To</th>
                <th>Date</th>
                <th>Volume</th>
                <th>Weight</th>
                <th>Type</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              { this.props.transports.map(transport => (
                <tr key={transport.id}>
                  <td>{transport.id}</td>
                  <td>{transport.from_city} ({transport.from_country})</td>
                  <td>{transport.to_city} ({transport.to_country})</td>
                  <td>{transport.date}</td>
                  <td>{transport.volume}</td>
                  <td>{transport.weight}</td>
                  <td>{transport.cargo_type}</td>
                  <td>{transport.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  transports: state.transports.transports
});

export default connect(mapStateToProps, { getTransports })(Transports);
