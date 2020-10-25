import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { createAgent } from '../../../redux/agents/action';

import Header from '../../components/header';
import Aside from '../../components/aside';



class AllStations extends React.Component{
    
    constructor(){
        super()
        this.state = {
            username: '',
            phone: '',
            email: '',
            center: '',
            password: '',
            confirmpassword: '',
            showLoading: false,
            errors: {},
        }
    }
    
    
    render(){
        
        return(
            <div>
                <h1>Hello World</h1>
            </div>
        
        );
  
}
}

  AllStations.propTypes = {
    setAlert: PropTypes.func.isRequired,
    agent: PropTypes.func.isRequired,
  }
  
  const mapStateToProps = (state) => ({
    authentication: state.authentication,
    agent: state.agent,
    errors: state.errors
  })
  

  export default connect(mapStateToProps, {createAgent})(withRouter(AllStations));