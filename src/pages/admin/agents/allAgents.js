import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { getAgentList } from '../../../redux/agents/action';

import Header from '../../components/header';
import Aside from '../../components/aside';
import Table from '../../components/table/table';

class AllAgents extends React.Component{
    
    constructor(props){
        super();
    }
    
    componentDidMount(){
        
        this.props.getAgentList();
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
                            Users                          </h5>
                        {/*end::Title*/}
                        {/*begin::Separator*/}
                        <div className="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200" />
                        {/*end::Separator*/}
                        {/*begin::Search Form*/}
                        <div className="d-flex align-items-center" id="kt_subheader_search">
                            <span className="text-dark-50 font-weight-bold" id="kt_subheader_total">
                            450 Total                                  </span>
                            <form className="ml-5">
                            <div className="input-group input-group-sm input-group-solid" style={{maxWidth: 175}}>
                                <input type="text" className="form-control" id="kt_subheader_search_form" placeholder="Search..." />
                                <div className="input-group-append">
                                <span className="input-group-text">
                                    <span className="svg-icon">{/*begin::Svg Icon | path:assets/media/svg/icons/General/Search.svg*/}<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        <rect x={0} y={0} width={24} height={24} />
                                        <path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                        <path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fillRule="nonzero" />
                                        </g>
                                    </svg>{/*end::Svg Icon*/}</span>                                    {/*<i class="flaticon2-search-1 icon-sm"></i>*/}
                                </span>
                                </div>
                            </div>
                            </form>
                        </div>
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
                        <a href="custom/apps/user/add-user.html" className="btn btn-light-primary font-weight-bold ml-2">
                            Add User                  </a>
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
                                        <Table />
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

AllAgents.propTypes = {
    setAlert: PropTypes.func.isRequired,
    agent: PropTypes.func.isRequired,
    getAgentList: PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
    authentication: state.authentication,
    agent: state.agent,
    errors: state.errors,
    alert: state.alert
  })
  
  

export default connect(mapStateToProps, {getAgentList})(withRouter(AllAgents));
