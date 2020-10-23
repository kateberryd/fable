import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { getCurrentProfile } from '../../redux/profile/action';
import { setAlert } from '../../redux/alert/action';

import Header from '../../components/header/header.component';
import Card from '../../components/card';

import AddProduct from '../../components/product/product';
import bgImage from '../../assets/media/bg/bg-10.jpg';
import lightLogo from '../../assets/media/logos/logo-light.png';




let styles = {
    bannerImage:{
        backgroundImage: `url(${bgImage})`,
    },
   
}

class FarmerDashboard extends React.Component {
  
  componentDidMount(){
    this.props.getCurrentProfile();
  }
    render(){
        document.title = 'Fabel | Dashboard';
          
        return(
          
            <body id="kt_body" style={styles.bannerImage}
              className="quick-panel-right demo-panel-right offcanvas-right header-fixed subheader-enabled page-loading">
                        {/*begin::Main*/}
                        {/* <Header /> */}
      
                        
               </body>
          )
      }

}
FarmerDashboard.propTypes = {
  setAlert: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  authentication: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  authentication: state.authentication,
  profile: state.profile,
  errors: state.errors
  
})
export default connect(mapStateToProps, {setAlert, getCurrentProfile})(withRouter(FarmerDashboard));