import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { logout } from '../../redux/authentication/action';
import {clearCurrentProfile} from '../../redux/profile/action';
import { setAlert } from '../../redux/alert/action';


import darkLogo from '../../assets/media/logos/logo-dark.png';
import userIcon from '../../assets/media/users/300_21.jpg';
import lightLogo from '../../assets/media/logos/logo-light.png';

    class Header extends React.Component{
        
        constructor(){
            super();
        }
        
        
        onLogout = (e) =>{
            e.preventDefault();
            this.props.clearCurrentProfile();
            this.props.logout();
           
        }
        
        render(){
        const {isAuthenticated, user} = this.props.authentication;

        return(
        <div id="kt_header" className="header  header-fixed ">
        {/*begin::Container*/}
            <div className=" container d-flex align-items-stretch justify-content-between">
            {/*begin::Left*/}
            <div className="d-flex align-items-stretch mr-3">
                {/*begin::Header Logo*/}
                <div className="header-logo">
                <a href="dashboard.html">
                    <img alt="Logo" src={lightLogo} className="logo-default max-h-40px" />
                <img alt="Logo" src={darkLogo} className="logo-sticky max-h-40px" />
                </a>
                </div>
                {/*end::Header Logo*/}
                {/*begin::Header Menu Wrapper*/}
                <div className="header-menu-wrapper header-menu-wrapper-left" id="kt_header_menu_wrapper">
                {/*begin::Header Menu*/}
                <div id="kt_header_menu" className="header-menu header-menu-left header-menu-mobile  header-menu-layout-default ">
                {/*begin::Header Nav*/}
                <ul className="menu-nav ">
                <li className="menu-item menu-item-open menu-item-here menu-item-submenu menu-item-rel menu-item-open menu-item-here">
                    <a href="dashboard.html" className="menu-link text-light">
                    <span className="menu-text">Dashboard</span>
                    </a>
                </li>
                <li className="menu-item  menu-item-submenu">
                    <a href="products.html" className="menu-link">
                    <span className="menu-text">Products</span>
                    </a>
                </li>
                </ul>
                {/*end::Header Nav*/}
            </div>
            {/*end::Header Menu*/}
            </div>
            {/*end::Header Menu Wrapper*/}
        </div>
        {/*end::Left*/}
        {/*begin::Topbar*/}
        <div className="topbar">
            {/*begin::User*/}
            <div className="dropdown">
            {/*begin::Toggle*/}
            <div className="topbar-item" data-toggle="dropdown" data-offset="0px,0px">
                <div className="btn btn-icon btn-hover-transparent-white d-flex align-items-center btn-lg px-md-2 w-md-auto">
                <span className="text-white opacity-70 font-weight-bold font-size-base d-none d-md-inline mr-1">Welcome,</span>
                 <span className="text-white opacity-90 font-weight-bolder font-size-base d-none d-md-inline mr-4">{user.username}</span>
                <span className="symbol symbol-35">
                    <span className="symbol-label text-white font-size-h5 font-weight-bold bg-white-o-30">A</span>
                </span>
                </div>
            </div>
            {/*end::Toggle*/}
            {/*begin::Dropdown*/}
            <div className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg p-0">
                {/*begin::Header*/}
                <div className="d-flex align-items-center p-8 rounded-top">
                {/*begin::Symbol*/}
                <div className="symbol symbol-md bg-light-primary mr-3 flex-shrink-0">
                    <img src={userIcon} alt="" />
                </div>
                {/*end::Symbol*/}
                {/*begin::Text*/}
                <div className="text-dark m-0 flex-grow-1 mr-3 font-size-h5">Fable Emmanuel</div>
                {/*end::Text*/}
                </div>
                <div className="separator separator-solid" />
                {/*end::Header*/}
                {/*begin::Nav*/}
                <div className="navi navi-spacer-x-0 pt-5">
                {/*begin::Item*/}
                <a href="custom/apps/user/profile-1/personal-information.html" className="navi-item px-8">
                    <div className="navi-link">
                <div className="navi-icon mr-2">
                    <i className="flaticon2-calendar-3 text-success" />
                </div>
                <div className="navi-text">
                    <div className="font-weight-bold">
                    My Profile
                    </div>
                    <div className="text-muted">
                    Account settings and more
                    </div>
                </div>
                </div>
        </a>
        {/*end::Item*/}
        {/*begin::Footer*/}
        <div className="navi-separator mt-3" />
        <div className="navi-footer  px-8 py-5">
            <a href=""  className="btn btn-light-primary font-weight-bold" onClick={this.onLogout}>
            Sign Out
            
            </a>
        </div>
        {/*end::Footer*/}
        </div>
        {/*end::Nav*/}
        </div>
        {/*end::Dropdown*/}
        </div>
        {/*end::User*/}
        </div>
        {/*end::Topbar*/}
        </div>
    {/*end::Container*/}
</div>
            

)}}
  Header.propTypes = {
    setAlert: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    clearCurrentProfile: PropTypes.func.isRequired
  }
  
  const mapStateToProps = (state) => ({
    authentication: state.authentication,
    
  })
export default connect(mapStateToProps, {setAlert, logout, clearCurrentProfile})(withRouter(Header));