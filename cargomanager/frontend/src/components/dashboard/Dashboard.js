import React, { Fragment } from 'react'
import Transport from '../transports/transports';
import Cargo from '../cargos/Cargos';

export default function Dashboard(props) {
  return (
    <Fragment>
      <div className="row">
        <div className="col-sd-12">
          <div className="py-4">
            <img src="../../../static/frontend/assets/highway.jpg" className="img-fluid" alt="Responsive image" />
          </div>
        </div>
        <div className="col-md-12 col-lg-8 col-xl-6">
          <Cargo all={props.all}/>
        </div>
        <div className="col-md-12 col-lg-8 col-xl-6">
          <Transport all={props.all}/>
        </div>
      </div>
    </Fragment>
  )
}
