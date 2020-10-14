import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


const PrivateRoute = ({component: Component, authentication, ...rest}) => (
    <Route
        {...rest}
        render = { props =>
            authentication.isAuthenticated === true ? (
                <Component {...props} />
            )
            :(
                <Redirect to="/" />
            )
        }
    />
)


 PrivateRoute.propTypes = {
    authentication: PropTypes.object.isRequired,
    
  }
  
  const mapStateToProps = (state) => ({
    authentication: state.authentication,
    
    
  })
  export default connect(mapStateToProps)(withRouter(PrivateRoute));