import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTransport } from '../../actions/transports';

export class Form extends Component {
  state = {
    from_country: '',
    from_city: '',
    to_country: '',
    to_city: '',
    date: '',
    volume: '',
    weight: '',
    cargo_type: '',
    price: ''
  };

  static propTypes = {
    addTransport: PropTypes.func.isRequired
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  onSubmit = e => {
    e.preventDefault();
    const { from_country, from_city, to_country, to_city, date, volume, weight, cargo_type, price } = this.state;
    const transport = { from_country, from_city, to_country, to_city, date, volume, weight, cargo_type, price };
    this.props.addTransport(transport);
    this.setState({ 
      from_country: '',
      from_city: '',
      to_country: '',
      to_city: '',
      date: '',
      volume: '',
      weight: '',
      cargo_type: '',
      price: ''
    });
  }
  
  render() {
    const { 
      from_country,
      from_city,
      to_country,
      to_city,
      date,
      volume,
      weight,
      cargo_type,
      price } = this.state;

    return (
      <div className="card card-body my-4">
        <h2>Add transport</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>From</label>
            <input 
              className="form-control"
              type="text"
              placeholder="Country"
              name="from_country"
              onChange={this.onChange}
              value={from_country}
            />
            <input 
              className="form-control"
              type="text"
              placeholder="City"
              name="from_city"
              onChange={this.onChange}
              value={from_city}
            />
          </div>
          <div className="form-group">
            <label>To</label>
            <input 
              className="form-control"
              type="text"
              placeholder="Country"
              name="to_country"
              onChange={this.onChange}
              value={to_country}
            />
            <input 
              className="form-control"
              type="text"
              placeholder="City"
              name="to_city"
              onChange={this.onChange}
              value={to_city}
            />
          </div>
          <div className="form-group">
            <label>Dimentions</label>
            <input 
              className="form-control"
              type="text"
              placeholder="Volume, m3"
              name="volume"
              onChange={this.onChange}
              value={volume}
            />
            <input 
              className="form-control"
              type="text"
              placeholder="Weight, kg"
              name="weight"
              onChange={this.onChange}
              value={weight}
            />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input 
              className="form-control"
              type="date"
              name="date"
              onChange={this.onChange}
              value={date}
            />
          </div>
          <div className="form-group">
            <label>Transport Type</label>
            <input 
              className="form-control"
              type="text"
              name="cargo_type"
              onChange={this.onChange}
              value={cargo_type}
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input 
              className="form-control"
              type="text"
              name="price"
              onChange={this.onChange}
              value={price}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { addTransport })(Form);
