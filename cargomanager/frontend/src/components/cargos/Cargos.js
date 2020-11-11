import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCargos } from '../../actions/cargos';

export class Cargos extends Component {

  static propTypes = {
    cargos: PropTypes.array.isRequired,
    getCargos: PropTypes.func.isRequired
  }

  componentDidMount () {
    this.props.getCargos();
  }

  render() {
    return (
      <Fragment>
        <h2>Cargos</h2>
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
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              { this.props.cargos.map(cargo => (
                <tr key={cargo.id}>
                  <td>{cargo.id}</td>
                  <td>{cargo.from_city} ({cargo.from_country})</td>
                  <td>{cargo.to_city} ({cargo.to_country})</td>
                  <td>{cargo.date}</td>
                  <td>{cargo.volume}</td>
                  <td>{cargo.weight}</td>
                  <td>{cargo.cargo_type}</td>
                  <td>{cargo.description}</td>
                  <td>{cargo.price}</td>
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
  cargos: state.cargos.cargos
});

export default connect(mapStateToProps, { getCargos })(Cargos);
