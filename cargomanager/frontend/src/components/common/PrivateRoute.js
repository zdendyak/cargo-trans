import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export const PrivateRoute = ({ component: Component, auth, ...rest  }) => {
  return (
    <div>
      <Route 
        {...rest}
        render={props => {
          if (auth.isLoading) {
            return <h2>...</h2>
          } else if (!auth.isAuthenticated) {
            return <Redirect to="/login" />
          } else {
            return <Component {...props}/>
          }
        }}
      />
    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
