import React, { Fragment } from 'react'
import Transport from './Transports';
import Form from './Form';

export default function Dashboard() {
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-12 col-lg-8">
          <div className="py-4">
            <img src="../../../static/frontend/assets/truck.jpg" className="img-fluid" alt="Responsive image" />
          </div>
          <Transport />
        </div>
        <div className="col-md-12 col-lg-4">
          <Form />
        </div>
      </div>
    </Fragment>
  )
}
