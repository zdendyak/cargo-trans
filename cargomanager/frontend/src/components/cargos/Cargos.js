import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCargos, deleteCargo } from '../../actions/cargos';

export class Cargos extends Component {

  static propTypes = {
    all: PropTypes.bool,
    cargos: PropTypes.array.isRequired,
    getCargos: PropTypes.func.isRequired,
    deleteCargo: PropTypes.func.isRequired,
  }

  componentDidMount () {
    this.props.getCargos(this.props.all);
  }

  onDelete (cargo) {
    console.log('delete', cargo);
    this.props.deleteCargo(cargo.id);
  }

  render() {
    const getDeleteBtn = (cargo) => {
      return (
        <td>
          <button className="btn btn-danger" onClick={() => this.onDelete(cargo)}>
            Delete
          </button>
        </td>
      )
    }

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
                { this.props.all ? null : <th></th>}
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
                  { this.props.all ? null : getDeleteBtn(cargo) }
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

export default connect(mapStateToProps, { getCargos, deleteCargo })(Cargos);
