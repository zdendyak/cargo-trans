import React, { Fragment } from 'react'
import Cargo from './Cargos';
import Form from './Form';

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Cargo />
    </Fragment>
  )
}
