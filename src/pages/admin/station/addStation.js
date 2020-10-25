import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createStation} from '../../../redux/station/action'

import Header from '../../components/header';
import Aside from '../../components/aside';
import {createStationForm, CreateStationForm} from './createStationForm';



class AddStation extends React.Component{
    
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
    
    handleSubmit = async event => {
      
        event.preventDefault();
        const {username,phone, email, center, password, confirmpassword, showLoading} = this.state;
        const formData = {username, phone, email, center, password, confirmpassword, showLoading}
        const {createStation} = this.props;
        this.setState({showLoading: true})
        createStation(formData);
        // console.log(formData);
       
    }
    handleChange =  event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
       
    }
    
    
    render(){
   
        return(
            <div>
                <Header />
                <Aside />
                <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
                <div className="content  d-flex flex-column flex-column-fluid" id="kt_content">
                    {/*begin::Subheader*/}
                    <div className="subheader py-2 py-lg-4  subheader-solid " id="kt_subheader">
                    <div className=" container-fluid  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                        {/*begin::Details*/}
                        <div className="d-flex align-items-center flex-wrap mr-2">
                        {/*begin::Title*/}
                        <h5 className="text-dark font-weight-bold mt-2 mb-2 mr-5">
                            Add Station                          </h5>
                        {/*end::Title*/}
                        {/*begin::Separator*/}
                        <div className="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200" />
                        {/*end::Separator*/}
                        {/*begin::Search Form*/}
                        
                        {/*end::Search Form*/}
                        {/*begin::Group Actions*/}
                        <div className="d-flex- align-items-center flex-wrap mr-2 d-none" id="kt_subheader_group_actions">
                            <div className="text-dark-50 font-weight-bold">
                            <span id="kt_subheader_group_selected_rows">23</span> Selected:
                            </div>
                            <div className="d-flex ml-6">
                            <div className="dropdown mr-2" id="kt_subheader_group_actions_status_change">
                                <button type="button" className="btn btn-light-primary font-weight-bolder btn-sm dropdown-toggle" data-toggle="dropdown">
                                Update Status
                                </button>
                                <div className="dropdown-menu p-0 m-0 dropdown-menu-sm">
                                <ul className="navi navi-hover pt-3 pb-4">
                                    <li className="navi-header font-weight-bolder text-uppercase text-primary font-size-lg pb-0">
                                    Change status to:
                                    </li>
                                    <li className="navi-item">
                                    <a href="#" className="navi-link" data-toggle="status-change" data-status={1}>
                                        <span className="navi-text"><span className="label label-light-success label-inline font-weight-bold">Approved</span></span>
                                    </a>
                                    </li>
                                    <li className="navi-item">
                                    <a href="#" className="navi-link" data-toggle="status-change" data-status={2}>
                                        <span className="navi-text"><span className="label label-light-danger label-inline font-weight-bold">Rejected</span></span>
                                    </a>
                                    </li>
                                    <li className="navi-item">
                                    <a href="#" className="navi-link" data-toggle="status-change" data-status={3}>
                                        <span className="navi-text"><span className="label label-light-warning label-inline font-weight-bold">Pending</span></span>
                                    </a>
                                    </li>
                                    <li className="navi-item">
                                    <a href="#" className="navi-link" data-toggle="status-change" data-status={4}>
                                        <span className="navi-text"><span className="label label-light-info label-inline font-weight-bold">On Hold</span></span>
                                    </a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            <button className="btn btn-light-success font-weight-bolder btn-sm mr-2" id="kt_subheader_group_actions_fetch" data-toggle="modal" data-target="#kt_datatable_records_fetch_modal">
                                Fetch Selected
                            </button>
                            <button className="btn btn-light-danger font-weight-bolder btn-sm mr-2" id="kt_subheader_group_actions_delete_all">
                                Delete All
                            </button>
                            </div>
                        </div>
                        {/*end::Group Actions*/}
                        </div>
                        {/*end::Details*/}
                        {/*begin::Toolbar*/}
                        <div className="d-flex align-items-center">
                        {/*begin::Button*/}
                        <a href="#" className>
                        </a>
                        {/*end::Button*/}
                        {/*begin::Button*/}
                        <a href="/add-Station" className="btn btn-light-primary font-weight-bold ml-2">
                            Add Station                </a>
                        {/*end::Button*/}
                        {/*begin::Dropdown*/}
                        <div className="dropdown dropdown-inline ml-2" data-toggle="tooltip" title="Quick actions" data-placement="left">
                            <a href="#" className="btn btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="svg-icon svg-icon-success svg-icon-2x">{/*begin::Svg Icon | path:assets/media/svg/icons/Files/File-plus.svg*/}<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                    <polygon points="0 0 24 0 24 24 0 24" />
                                    <path d="M5.85714286,2 L13.7364114,2 C14.0910962,2 14.4343066,2.12568431 14.7051108,2.35473959 L19.4686994,6.3839416 C19.8056532,6.66894833 20,7.08787823 20,7.52920201 L20,20.0833333 C20,21.8738751 19.9795521,22 18.1428571,22 L5.85714286,22 C4.02044787,22 4,21.8738751 4,20.0833333 L4,3.91666667 C4,2.12612489 4.02044787,2 5.85714286,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                    <path d="M11,14 L9,14 C8.44771525,14 8,13.5522847 8,13 C8,12.4477153 8.44771525,12 9,12 L11,12 L11,10 C11,9.44771525 11.4477153,9 12,9 C12.5522847,9 13,9.44771525 13,10 L13,12 L15,12 C15.5522847,12 16,12.4477153 16,13 C16,13.5522847 15.5522847,14 15,14 L13,14 L13,16 C13,16.5522847 12.5522847,17 12,17 C11.4477153,17 11,16.5522847 11,16 L11,14 Z" fill="#000000" />
                                </g>
                                </svg>{/*end::Svg Icon*/}</span>                  </a>
                            <div className="dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right">
                            {/*begin::Naviigation*/}
                            <ul className="navi">
                                <li className="navi-header font-weight-bold py-5">
                                <span className="font-size-lg">Add New:</span>
                                <i className="flaticon2-information icon-md text-muted" data-toggle="tooltip" data-placement="right" title="Click to learn more..." />
                                </li>
                                <li className="navi-separator mb-3 opacity-70" />
                                <li className="navi-item">
                                <a href="#" className="navi-link">
                                    <span className="navi-icon"><i className="flaticon2-shopping-cart-1" /></span>
                                    <span className="navi-text">Order</span>
                                </a>
                                </li>
                                <li className="navi-item">
                                <a href="#" className="navi-link">
                                    <span className="navi-icon"><i className="navi-icon flaticon2-calendar-8" /></span>
                                    <span className="navi-text">Members</span>
                                    <span className="navi-label">
                                    <span className="label label-light-danger label-rounded font-weight-bold">3</span>
                                    </span>
                                </a>
                                </li>
                                <li className="navi-item">
                                <a href="#" className="navi-link">
                                    <span className="navi-icon"><i className="navi-icon flaticon2-telegram-logo" /></span>
                                    <span className="navi-text">Project</span>
                                </a>
                                </li>
                                <li className="navi-item">
                                <a href="#" className="navi-link">
                                    <span className="navi-icon"><i className="navi-icon flaticon2-new-email" /></span>
                                    <span className="navi-text">Record</span>
                                    <span className="navi-label">
                                    <span className="label label-light-success label-rounded font-weight-bold">5</span>
                                    </span>
                                </a>
                                </li>
                                <li className="navi-separator mt-3 opacity-70" />
                                <li className="navi-footer pt-5 pb-4">
                                <a className="btn btn-light-primary font-weight-bolder btn-sm" href="#">More options</a>
                                <a className="btn btn-clean font-weight-bold btn-sm d-none" href="#" data-toggle="tooltip" data-placement="right" title="Click to learn more...">Learn more</a>
                                </li>
                            </ul>
                            {/*end::Naviigation*/}
                            </div>
                        </div>
                        {/*end::Dropdown*/}
                        </div>
                        {/*end::Toolbar*/}
                    </div>
                    </div>

                        <div className="d-flex flex-column-fluid">
                            <div className="container">
                                <div className="card card-custom gutter-b">
                                    <div className="card-body">
                                        <CreateStationForm createStation={createStation} />
                                    </div>
                                </div>
                            </div>
                        </div>

                 </div>
                </div>
            </div>
            
        )
    }
}

AddStation.propTypes = {
    setAlert: PropTypes.func.isRequired,
    station: PropTypes.func.isRequired,
  }
  
  const mapStateToProps = (state) => ({
    authentication: state.authentication,
    station: state.station,
    errors: state.errors
  })
  

  export default connect(mapStateToProps, {createStation})(withRouter(AddStation));