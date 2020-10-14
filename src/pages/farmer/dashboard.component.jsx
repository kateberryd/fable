import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { getCurrentProfile } from '../../redux/profile/action';
import { setAlert } from '../../redux/alert/action';

import Header from '../../components/header/header.component';


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
                        <Header />
                        {/*begin::Header Mobile*/}
                        <div id="kt_header_mobile" className="header-mobile ">
                          {/*begin::Logo*/}
                          <a href="dashboard.html">
                            <img alt="Logo" src={lightLogo} className="logo-default max-h-30px" />
                          </a>
                          {/*end::Logo*/}
                          {/*begin::Toolbar*/}
                          <div className="d-flex align-items-center">
                            <button className="btn p-0 burger-icon burger-icon-left ml-4" id="kt_header_mobile_toggle">
                              <span />
                            </button>
                            <button className="btn btn-icon btn-hover-transparent-white p-0 ml-3" id="kt_header_mobile_topbar_toggle">
                              <span className="svg-icon svg-icon-xl">{/*begin::Svg Icon | path:assets/media/svg/icons/General/User.svg*/}<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                  <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                    <polygon points="0 0 24 0 24 24 0 24" />
                                    <path d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                    <path d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z" fill="#000000" fillRule="nonzero" />
                                  </g>
                                </svg>{/*end::Svg Icon*/}</span></button>
                          </div>
                          {/*end::Toolbar*/}
                        </div>
                        {/*end::Header Mobile*/}
                        <div className="d-flex flex-column flex-root">
                          {/*begin::Page*/}
                          <div className="d-flex flex-row flex-column-fluid page">
                            {/*begin::Wrapper*/}
                            <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
                              {/*begin::Header*/}
                              {/*begin::Content*/}
                              <div className="content pos@relative d-flex flex-column flex-column-fluid" id="kt_content">
                                {/*begin::Subheader*/}
                                <div className="subheader py-2 py-lg-12  subheader-transparent " id="kt_subheader">
                                  <div className=" container  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                                    {/*begin::Info*/}
                                    <div className="d-flex align-items-center flex-wrap mr-1">
                                      {/*begin::Heading*/}
                                      <div className="d-flex flex-column">
                                        {/*begin::Title*/}
                                        <h2 className="text-white font-weight-bold my-2 mr-5">
                                          Dashboard </h2>
                                        {/*end::Title*/}
                                        {/*begin::Breadcrumb*/}
                                        <div className="d-flex align-items-center font-weight-bold my-2">
                                          {/*begin::Item*/}
                                          <a href="#" className="opacity-75 hover-opacity-100">
                                            <i className="flaticon2-shelter text-white icon-1x" />
                                          </a>
                                          {/*end::Item*/}
                                          {/*begin::Item*/}
                                          <span className="label label-dot label-sm bg-white opacity-75 mx-3" />
                                          <a href className="text-white text-hover-white opacity-75 hover-opacity-100">
                                            Dashboard </a>
                                          {/*end::Item*/}
                                          {/*begin::Item*/}
                                          <span className="label label-dot label-sm bg-white opacity-75 mx-3" />
                                          <a href className="text-white text-hover-white opacity-75 hover-opacity-100">
                                            Latest Updated </a>
                                          {/*end::Item*/}
                                        </div>
                                        {/*end::Breadcrumb*/}
                                      </div>
                                      {/*end::Heading*/}
                                    </div>
                                    {/*end::Info*/}
                                    {/*begin::Toolbar*/}
                                    <div className="d-flex align-items-center">
                                      {/*begin::Dropdown*/}
                                      <div className="dropdown dropdown-inline ml-2" data-toggle="tooltip" title="Quick actions" data-placement="top">
                                        <a href="#" className="btn btn-white font-weight-bold py-3 px-6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          Actions
                                        </a>
                                        <div className="dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right">
                                          {/*begin::Navigation*/}
                                          <ul className="navi navi-hover py-5">
                                            <li className="navi-item">
                                              <a href="#" className="navi-link">
                                                <span className="navi-icon"><i className="flaticon2-drop" /></span>
                                                <span className="navi-text">New Group</span>
                                              </a>
                                            </li>
                                            <li className="navi-item">
                                              <a href="#" className="navi-link">
                                                <span className="navi-icon"><i className="flaticon2-list-3" /></span>
                                                <span className="navi-text">Contacts</span>
                                              </a>
                                            </li>
                                            <li className="navi-item">
                                              <a href="#" className="navi-link">
                                                <span className="navi-icon"><i className="flaticon2-rocket-1" /></span>
                                                <span className="navi-text">Groups</span>
                                                <span className="navi-link-badge">
                                                  <span className="label label-light-primary label-inline font-weight-bold">new</span>
                                                </span>
                                              </a>
                                            </li>
                                            <li className="navi-item">
                                              <a href="#" className="navi-link">
                                                <span className="navi-icon"><i className="flaticon2-bell-2" /></span>
                                                <span className="navi-text">Calls</span>
                                              </a>
                                            </li>
                                            <li className="navi-item">
                                              <a href="#" className="navi-link">
                                                <span className="navi-icon"><i className="flaticon2-gear" /></span>
                                                <span className="navi-text">Settings</span>
                                              </a>
                                            </li>
                                            <li className="navi-separator my-3" />
                                            <li className="navi-item">
                                              <a href="#" className="navi-link">
                                                <span className="navi-icon"><i className="flaticon2-magnifier-tool" /></span>
                                                <span className="navi-text">Help</span>
                                              </a>
                                            </li>
                                            <li className="navi-item">
                                              <a href="#" className="navi-link">
                                                <span className="navi-icon"><i className="flaticon2-bell-2" /></span>
                                                <span className="navi-text">Privacy</span>
                                                <span className="navi-link-badge">
                                                  <span className="label label-light-danger label-rounded font-weight-bold">5</span>
                                                </span>
                                              </a>
                                            </li>
                                          </ul>
                                          {/*end::Navigation*/}
                                        </div>
                                      </div>
                                      {/*end::Dropdown*/}
                                    </div>
                                    {/*end::Toolbar*/}
                                  </div>
                                </div>
                                {/*end::Subheader*/}
                                {/*begin::Entry*/}
                                <div className="d-flex flex-column-fluid">
                                  {/*begin::Container*/}
                                  <div className=" container ">
                                    {/*begin::Dashboard*/}
                                    {/*begin::Row*/}
                                    <div className="row">
                                      <div className="col-xl-12">
                                        <div className="row">
                                          <div className="col-xl-6">
                                            {/*begin::Tiles Widget 11*/}
                                            <div className="card card-custom bg-primary gutter-b" style={{height: '150px'}}>
                                              <div className="card-body">
                                                <span className="svg-icon svg-icon-3x svg-icon-white ml-n2">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                      <rect x={0} y={0} width={24} height={24} />
                                                      <rect fill="#000000" x={4} y={4} width={7} height={7} rx="1.5" />
                                                      <path d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z" fill="#000000" opacity="0.3" />
                                                    </g>
                                                  </svg></span>
                                                <div className="text-inverse-primary font-weight-bolder font-size-h2 mt-3">
                                                  0
                                                </div>
                                                <a href="products.html" className="text-inverse-primary font-weight-bold font-size-lg mt-1">Products</a>
                                              </div>
                                            </div>
                                            {/*end::Tiles Widget 11*/}
                                          </div>
                                          <div className="col-xl-6">
                                            {/*begin::Tiles Widget 12*/}
                                            <div className="card card-custom gutter-b" style={{height: '150px'}}>
                                              <div className="card-body">
                                                <span className="svg-icon svg-icon-3x svg-icon-success">{/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Group.svg*/}<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                      <polygon points="0 0 24 0 24 24 0 24" />
                                                      <path d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                      <path d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z" fill="#000000" fillRule="nonzero" />
                                                    </g>
                                                  </svg>{/*end::Svg Icon*/}</span>
                                                <div className="text-dark font-weight-bolder font-size-h2 mt-3">
                                                  0
                                                </div>
                                                <a href="#" className="text-muted text-hover-primary font-weight-bold font-size-lg mt-1">Customers</a>
                                              </div>
                                            </div>
                                            {/*end::Tiles Widget 12*/}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/*end::Row*/}
                                    {/*begin::Row*/}
                                    <div className="row">
                                      <div className="col-lg-6 col-xxl-4">
                                        {/*begin::Mixed Widget 4*/}
                                        <div className="card card-custom bg-radial-gradient-danger gutter-b card-stretch">
                                          {/*begin::Header*/}
                                          <div className="card-header border-0 py-5">
                                            <h3 className="card-title font-weight-bolder text-white">Sales Progress</h3>
                                            <div className="card-toolbar">
                                              <div className="dropdown dropdown-inline">
                                                <a href="#" className="btn btn-text-white btn-hover-white btn-sm btn-icon border-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                  <i className="ki ki-bold-more-hor" />
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                                                  {/*begin::Navigation*/}
                                                  <ul className="navi navi-hover">
                                                    <li className="navi-header pb-1">
                                                      <span className="text-primary text-uppercase font-weight-bold font-size-sm">Add new:</span>
                                                    </li>
                                                    <li className="navi-item">
                                                      <a href="#" className="navi-link">
                                                        <span className="navi-icon"><i className="flaticon2-shopping-cart-1" /></span>
                                                        <span className="navi-text">Order</span>
                                                      </a>
                                                    </li>
                                                    <li className="navi-item">
                                                      <a href="#" className="navi-link">
                                                        <span className="navi-icon"><i className="flaticon2-calendar-8" /></span>
                                                        <span className="navi-text">Event</span>
                                                      </a>
                                                    </li>
                                                    <li className="navi-item">
                                                      <a href="#" className="navi-link">
                                                        <span className="navi-icon"><i className="flaticon2-graph-1" /></span>
                                                        <span className="navi-text">Report</span>
                                                      </a>
                                                    </li>
                                                    <li className="navi-item">
                                                      <a href="#" className="navi-link">
                                                        <span className="navi-icon"><i className="flaticon2-rocket-1" /></span>
                                                        <span className="navi-text">Post</span>
                                                      </a>
                                                    </li>
                                                    <li className="navi-item">
                                                      <a href="#" className="navi-link">
                                                        <span className="navi-icon"><i className="flaticon2-writing" /></span>
                                                        <span className="navi-text">File</span>
                                                      </a>
                                                    </li>
                                                  </ul>
                                                  {/*end::Navigation*/}
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          {/*end::Header*/}
                                          {/*begin::Body*/}
                                          <div className="card-body d-flex flex-column p-0">
                                            {/*begin::Chart*/}
                                            <div id="kt_mixed_widget_6_chart" style={{height: '200px'}} />
                                            {/*end::Chart*/}
                                            {/*begin::Stats*/}
                                            <div className="card-spacer bg-white card-rounded flex-grow-1">
                                              {/*begin::Row*/}
                                              <div className="row m-0">
                                                <div className="col px-8 py-6 mr-8">
                                                  <div className="font-size-sm text-muted font-weight-bold">Average Sale
                                                  </div>
                                                  <div className="font-size-h4 font-weight-bolder">N240,000.00</div>
                                                </div>
                                                <div className="col px-8 py-6">
                                                  <div className="font-size-sm text-muted font-weight-bold">Commission
                                                  </div>
                                                  <div className="font-size-h4 font-weight-bolder">N12,000,000.00</div>
                                                </div>
                                              </div>
                                              {/*end::Row*/}
                                              {/*begin::Row*/}
                                              <div className="row m-0">
                                                <div className="col px-8 py-6 mr-8">
                                                  <div className="font-size-sm text-muted font-weight-bold">Annual Taxes
                                                  </div>
                                                  <div className="font-size-h4 font-weight-bolder">N900,000.00</div>
                                                </div>
                                                <div className="col px-8 py-6">
                                                  <div className="font-size-sm text-muted font-weight-bold">Annual
                                                    Income
                                                  </div>
                                                  <div className="font-size-h4 font-weight-bolder">N400,000.00</div>
                                                </div>
                                              </div>
                                              {/*end::Row*/}
                                            </div>
                                            {/*end::Stats*/}
                                          </div>
                                          {/*end::Body*/}
                                        </div>
                                        {/*end::Mixed Widget 4*/}
                                      </div>
                                      <div className="col-lg-6 col-xxl-8">
                                        {/*begin::Advance Table Widget 1*/}
                                        <div className="card card-custom card-stretch gutter-b">
                                          {/*begin::Header*/}
                                          <div className="card-header border-0 py-5">
                                            <h3 className="card-title align-items-start flex-column">
                                              <span className="card-label font-weight-bolder text-dark">Products</span>
                                              <span className="text-muted mt-3 font-weight-bold font-size-sm">Total List of Products from the Latest additions</span>
                                            </h3>
                                            <div className="card-toolbar">
                                              <a href="#" className="btn btn-success font-weight-bolder font-size-sm" data-toggle="modal" data-target="#exampleModalCenter">
                                                <i className="fas fa-pepper-hot" />
                                                Add Product
                                               
                                              </a>
                                             
                                            </div>
                                          </div>
                                          {/*end::Header*/}
                                          {/*begin::Body*/}
                                          <div className="card-body py-0">
                                            {/*begin::Table*/}
                                            <div className="table-responsive">
                                              <table className="table table-head-custom table-vertical-center" id="kt_advance_table_widget_1">
                                                <thead>
                                                  <tr className="text-left">
                                                    <th className="pl-0" style={{width: '20px'}}>
                                                      <label className="checkbox checkbox-lg checkbox-inline">
                                                        <input type="checkbox" defaultValue={1} />
                                                        <span />
                                                      </label>
                                                    </th>
                                                    <th className="pr-0" style={{width: '50px'}}>Product</th>
                                                    <th style={{minWidth: '200px'}} />
                                                    <th style={{minWidth: '150px'}}>Quantity %</th>
                                                    <th className="pr-0 text-right" style={{minWidth: '150px'}}>action</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td className="pl-0">
                                                      <label className="checkbox checkbox-lg checkbox-inline">
                                                        <input type="checkbox" defaultValue={1} />
                                                        <span />
                                                      </label>
                                                    </td>
                                                    <td className="pr-0">
                                                      <div className="symbol symbol-50 symbol-light mt-1">
                                                        <span className="symbol-label">
                                                          <img src="assets/media/svg/avatars/001-boy.svg" className="h-75 align-self-end" alt="" />
                                                        </span>
                                                      </div>
                                                    </td>
                                                    <td className="pl-0">
                                                      <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">Potatoes</a>
                                                      <span className="text-muted font-weight-bold text-muted d-block">N2,000 per Bag</span>
                                                    </td>
                                                    <td>
                                                      <div className="d-flex flex-column w-100 mr-2">
                                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                                          <span className="text-muted mr-2 font-size-sm font-weight-bold">
                                                            65%
                                                          </span>
                                                          <span className="text-muted font-size-sm font-weight-bold">
                                                            Bought
                                                          </span>
                                                        </div>
                                                        <div className="progress progress-xs w-100">
                                                          <div className="progress-bar bg-danger" role="progressbar" style={{width: '65%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                      </div>
                                                    </td>
                                                    <td className="pr-0 text-right">
                                                      <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                        <span className="svg-icon svg-icon-md svg-icon-primary">{/*begin::Svg Icon | path:assets/media/svg/icons/General/Settings-1.svg*/}<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                              <rect x={0} y={0} width={24} height={24} />
                                                              <path d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z" fill="#000000" />
                                                              <path d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z" fill="#000000" opacity="0.3" />
                                                            </g>
                                                          </svg>{/*end::Svg Icon*/}</span> </a>
                                                      <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3">
                                                        <span className="svg-icon svg-icon-md svg-icon-primary">{/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg*/}<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                              <rect x={0} y={0} width={24} height={24} />
                                                              <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fillRule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) " />
                                                              <path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                            </g>
                                                          </svg>{/*end::Svg Icon*/}</span> </a>
                                                      <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                        <span className="svg-icon svg-icon-md svg-icon-primary">{/*begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg*/}<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                              <rect x={0} y={0} width={24} height={24} />
                                                              <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fillRule="nonzero" />
                                                              <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />
                                                            </g>
                                                          </svg>{/*end::Svg Icon*/}</span> </a>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td className="pl-0">
                                                      <label className="checkbox checkbox-lg checkbox-inline">
                                                        <input type="checkbox" defaultValue={1} />
                                                        <span />
                                                      </label>
                                                    </td>
                                                    <td className="pr-0">
                                                      <div className="symbol symbol-50 symbol-light mt-1">
                                                        <span className="symbol-label">
                                                          <img src="assets/media/svg/avatars/001-boy.svg" className="h-75 align-self-end" alt="" />
                                                        </span>
                                                      </div>
                                                    </td>
                                                    <td className="pl-0">
                                                      <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">Yams</a>
                                                      <span className="text-muted font-weight-bold text-muted d-block">N5,000 per Sack</span>
                                                    </td>
                                                    <td>
                                                      <div className="d-flex flex-column w-100 mr-2">
                                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                                          <span className="text-muted mr-2 font-size-sm font-weight-bold">
                                                            85%
                                                          </span>
                                                          <span className="text-muted font-size-sm font-weight-bold">
                                                            Bought
                                                          </span>
                                                        </div>
                                                        <div className="progress progress-xs w-100">
                                                          <div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                      </div>
                                                    </td>
                                                    <td className="pr-0 text-right">
                                                      <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                        <span className="svg-icon svg-icon-md svg-icon-primary">{/*begin::Svg Icon | path:assets/media/svg/icons/General/Settings-1.svg*/}<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                              <rect x={0} y={0} width={24} height={24} />
                                                              <path d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z" fill="#000000" />
                                                              <path d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z" fill="#000000" opacity="0.3" />
                                                            </g>
                                                          </svg>{/*end::Svg Icon*/}</span> </a>
                                                      <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3">
                                                        <span className="svg-icon svg-icon-md svg-icon-primary">{/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg*/}<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                              <rect x={0} y={0} width={24} height={24} />
                                                              <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fillRule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) " />
                                                              <path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                            </g>
                                                          </svg>{/*end::Svg Icon*/}</span> </a>
                                                      <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                        <span className="svg-icon svg-icon-md svg-icon-primary">{/*begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg*/}<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                              <rect x={0} y={0} width={24} height={24} />
                                                              <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fillRule="nonzero" />
                                                              <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />
                                                            </g>
                                                          </svg>{/*end::Svg Icon*/}</span> </a>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td className="pl-0">
                                                      <label className="checkbox checkbox-lg checkbox-inline">
                                                        <input type="checkbox" defaultValue={1} />
                                                        <span />
                                                      </label>
                                                    </td>
                                                    <td className="pr-0">
                                                      <div className="symbol symbol-50 symbol-light mt-1">
                                                        <span className="symbol-label">
                                                          <img src="assets/media/svg/avatars/001-boy.svg" className="h-75 align-self-end" alt="" />
                                                        </span>
                                                      </div>
                                                    </td>
                                                    <td className="pl-0">
                                                      <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">Foreign Rice</a>
                                                      <span className="text-muted font-weight-bold text-muted d-block">N18,000 per Bag</span>
                                                    </td>
                                                    <td>
                                                      <div className="d-flex flex-column w-100 mr-2">
                                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                                          <span className="text-muted mr-2 font-size-sm font-weight-bold">
                                                            35%
                                                          </span>
                                                          <span className="text-muted font-size-sm font-weight-bold">
                                                            Bought
                                                          </span>
                                                        </div>
                                                        <div className="progress progress-xs w-100">
                                                          <div className="progress-bar bg-success" role="progressbar" style={{width: '35%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                      </div>
                                                    </td>
                                                    <td className="pr-0 text-right">
                                                      <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                        <span className="svg-icon svg-icon-md svg-icon-primary">{/*begin::Svg Icon | path:assets/media/svg/icons/General/Settings-1.svg*/}<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                              <rect x={0} y={0} width={24} height={24} />
                                                              <path d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z" fill="#000000" />
                                                              <path d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z" fill="#000000" opacity="0.3" />
                                                            </g>
                                                          </svg>{/*end::Svg Icon*/}</span> </a>
                                                      <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3">
                                                        <span className="svg-icon svg-icon-md svg-icon-primary">{/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg*/}<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                              <rect x={0} y={0} width={24} height={24} />
                                                              <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fillRule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) " />
                                                              <path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                            </g>
                                                          </svg>{/*end::Svg Icon*/}</span> </a>
                                                      <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                        <span className="svg-icon svg-icon-md svg-icon-primary">{/*begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg*/}
                                                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                              <rect x={0} y={0} width={24} height={24} />
                                                              <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fillRule="nonzero" />
                                                              <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />
                                                            </g>
                                                          </svg>
                                                        </span>
                                                      </a>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td className="pl-0">
                                                      <label className="checkbox checkbox-lg checkbox-inline">
                                                        <input type="checkbox" defaultValue={1} />
                                                        <span />
                                                      </label>
                                                    </td>
                                                    <td className="pr-0">
                                                      <div className="symbol symbol-50 symbol-light mt-1">
                                                        <span className="symbol-label">
                                                          <img src="assets/media/svg/avatars/001-boy.svg" className="h-75 align-self-end" alt="" />
                                                        </span>
                                                      </div>
                                                    </td>
                                                    <td className="pl-0">
                                                      <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">Local Rice</a>
                                                      <span className="text-muted font-weight-bold text-muted d-block">N10,000 per Bag</span>
                                                    </td>
                                                    <td>
                                                      <div className="d-flex flex-column w-100 mr-2">
                                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                                          <span className="text-muted mr-2 font-size-sm font-weight-bold">
                                                            75%
                                                          </span>
                                                          <span className="text-muted font-size-sm font-weight-bold">
                                                            Bought
                                                          </span>
                                                        </div>
                                                        <div className="progress progress-xs w-100">
                                                          <div className="progress-bar bg-danger" role="progressbar" style={{width: '75%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                      </div>
                                                    </td>
                                                    <td className="pr-0 text-right">
                                                      <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                        <span className="svg-icon svg-icon-md svg-icon-primary">{/*begin::Svg Icon | path:assets/media/svg/icons/General/Settings-1.svg*/}<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                              <rect x={0} y={0} width={24} height={24} />
                                                              <path d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z" fill="#000000" />
                                                              <path d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z" fill="#000000" opacity="0.3" />
                                                            </g>
                                                          </svg>{/*end::Svg Icon*/}</span> </a>
                                                      <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3">
                                                        <span className="svg-icon svg-icon-md svg-icon-primary">{/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg*/}<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                              <rect x={0} y={0} width={24} height={24} />
                                                              <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fillRule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) " />
                                                              <path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                            </g>
                                                          </svg>{/*end::Svg Icon*/}</span> </a>
                                                      <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                        <span className="svg-icon svg-icon-md svg-icon-primary">{/*begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg*/}<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                              <rect x={0} y={0} width={24} height={24} />
                                                              <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fillRule="nonzero" />
                                                              <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />
                                                            </g>
                                                          </svg>{/*end::Svg Icon*/}</span> </a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                            {/*end::Table*/}
                                          </div>
                                          {/*end::Body*/}
                                        </div>
                                        {/*end::Advance Table Widget 1*/}
                                      </div>
                                    </div>
                                    {/*end::Row*/}
                                    {/*end::Dashboard*/}
                                  </div>
                                  {/*end::Container*/}
                                </div>
                                {/*end::Entry*/}
                              </div>
                              {/*end::Content*/}
                              {/*begin::Footer*/}
                              <div className="footer bg-white py-4 d-flex flex-lg-column " id="kt_footer">
                                {/*begin::Container*/}
                                <div className=" container  d-flex flex-column flex-md-row align-items-center justify-content-between">
                                  {/*begin::Copyright*/}
                                  <div className="text-dark order-2 order-md-1">
                                    <span className="text-muted font-weight-bold mr-2">2020©</span>
                                    <a href="./" target="_blank" className="text-dark-75 text-hover-primary">Fable</a>
                                  </div>
                                  {/*end::Copyright*/}
                                  {/*begin::Nav*/}
                                  <div className="nav nav-dark order-1 order-md-2">
                                    <a href="http://keenthemes.com/metronic" target="_blank" className="nav-link pr-3 pl-0">About</a>
                                    <a href="http://keenthemes.com/metronic" target="_blank" className="nav-link px-3">Team</a>
                                    <a href="http://keenthemes.com/metronic" target="_blank" className="nav-link pl-3 pr-0">Contact</a>
                                  </div>
                                  {/*end::Nav*/}
                                </div>
                                {/*end::Container*/}
                              </div>
                              {/*end::Footer*/}
                            </div>
                            {/*end::Wrapper*/}
                          </div>
                          {/*end::Page*/}
                        </div>
                        {/*end::Main*/}
                        {/*begin::Quick Panel*/}
                        <div id="kt_quick_panel" className="offcanvas offcanvas-right pt-5 pb-10">
                          {/*begin::Header*/}
                          <div className="offcanvas-header offcanvas-header-navs d-flex align-items-center justify-content-between mb-5">
                            <ul className="nav nav-bold nav-tabs nav-tabs-line nav-tabs-line-3x nav-tabs-primary flex-grow-1 px-10" role="tablist">
                              <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#kt_quick_panel_logs">Audit Logs</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#kt_quick_panel_notifications">Notifications</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#kt_quick_panel_settings">Settings</a>
                              </li>
                            </ul>
                            <div className="offcanvas-close mt-n1 pr-5">
                              <a href="#" className="btn btn-xs btn-icon btn-light btn-hover-primary" id="kt_quick_panel_close">
                                <i className="ki ki-close icon-xs text-muted" />
                              </a>
                            </div>
                          </div>
                          {/*end::Header*/}
                          {/*begin::Content*/}
                          <div className="offcanvas-content px-10">
                            <div className="tab-content">
                              {/*begin::Tabpane*/}
                              <div className="tab-pane fade show pt-3 pr-5 mr-n5 active" id="kt_quick_panel_logs" role="tabpanel">
                                {/*begin::Section*/}
                                <div className="mb-15">
                                  <h5 className="font-weight-bold mb-5">System Messages</h5>
                                  {/*begin: Item*/}
                                  <div className="d-flex align-items-center flex-wrap mb-5">
                                    <div className="symbol symbol-50 symbol-light mr-5">
                                      <span className="symbol-label">
                                        <img src="assets/media/svg/misc/006-plurk.svg" className="h-50 align-self-center" alt="" />
                                      </span>
                                    </div>
                                    <div className="d-flex flex-column flex-grow-1 mr-2">
                                      <a href="#" className="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1">Top
                                        Authors</a>
                                      <span className="text-muted font-weight-bold">Most Successful Fellas</span>
                                    </div>
                                    <span className="btn btn-sm btn-light font-weight-bolder py-1 my-lg-0 my-2 text-dark-50">+82$</span>
                                  </div>
                                  {/*end: Item*/}
                                  {/*begin: Item*/}
                                  <div className="d-flex align-items-center flex-wrap mb-5">
                                    <div className="symbol symbol-50 symbol-light mr-5">
                                      <span className="symbol-label">
                                        <img src="assets/media/svg/misc/015-telegram.svg" className="h-50 align-self-center" alt="" />
                                      </span>
                                    </div>
                                    <div className="d-flex flex-column flex-grow-1 mr-2">
                                      <a href="#" className="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1">Popular
                                        Authors</a>
                                      <span className="text-muted font-weight-bold">Most Successful Fellas</span>
                                    </div>
                                    <span className="btn btn-sm btn-light font-weight-bolder  my-lg-0 my-2 py-1 text-dark-50">+280$</span>
                                  </div>
                                  {/*end: Item*/}
                                  {/*begin: Item*/}
                                  <div className="d-flex align-items-center flex-wrap mb-5">
                                    <div className="symbol symbol-50 symbol-light mr-5">
                                      <span className="symbol-label">
                                        <img src="assets/media/svg/misc/003-puzzle.svg" className="h-50 align-self-center" alt="" />
                                      </span>
                                    </div>
                                    <div className="d-flex flex-column flex-grow-1 mr-2">
                                      <a href="#" className="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1">New
                                        Users</a>
                                      <span className="text-muted font-weight-bold">Most Successful Fellas</span>
                                    </div>
                                    <span className="btn btn-sm btn-light font-weight-bolder  my-lg-0 my-2 py-1 text-dark-50">+4500$</span>
                                  </div>
                                  {/*end: Item*/}
                                  {/*begin: Item*/}
                                  <div className="d-flex align-items-center flex-wrap mb-5">
                                    <div className="symbol symbol-50 symbol-light mr-5">
                                      <span className="symbol-label">
                                        <img src="assets/media/svg/misc/005-bebo.svg" className="h-50 align-self-center" alt="" />
                                      </span>
                                    </div>
                                    <div className="d-flex flex-column flex-grow-1 mr-2">
                                      <a href="#" className="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1">Active
                                        Customers</a>
                                      <span className="text-muted font-weight-bold">Most Successful Fellas</span>
                                    </div>
                                    <span className="btn btn-sm btn-light font-weight-bolder my-lg-0 my-2 py-1 text-dark-50">+4500$</span>
                                  </div>
                                  {/*end: Item*/}
                                  {/*begin: Item*/}
                                  <div className="d-flex align-items-center flex-wrap">
                                    <div className="symbol symbol-50 symbol-light mr-5">
                                      <span className="symbol-label">
                                        <img src="assets/media/svg/misc/014-kickstarter.svg" className="h-50 align-self-center" alt="" />
                                      </span>
                                    </div>
                                    <div className="d-flex flex-column flex-grow-1 mr-2">
                                      <a href="#" className="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1">Bestseller
                                        Theme</a>
                                      <span className="text-muted font-weight-bold">Most Successful Fellas</span>
                                    </div>
                                    <span className="btn btn-sm btn-light font-weight-bolder my-lg-0 my-2 py-1 text-dark-50">+4500$</span>
                                  </div>
                                  {/*end: Item*/}
                                </div>
                                {/*end::Section*/}
                                {/*begin::Section*/}
                                <div className="mb-5">
                                  <h5 className="font-weight-bold mb-5">Notifications</h5>
                                  {/*begin: Item*/}
                                  <div className="d-flex align-items-center bg-light-warning rounded p-5 mb-5">
                                    <span className="svg-icon svg-icon-warning mr-5">
                                      <span className="svg-icon svg-icon-lg">{/*begin::Svg Icon | path:assets/media/svg/icons/Home/Library.svg*/}<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                          <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                            <rect x={0} y={0} width={24} height={24} />
                                            <path d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z" fill="#000000" />
                                            <rect fill="#000000" opacity="0.3" transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519) " x="16.3255682" y="2.94551858" width={3} height={18} rx={1} />
                                          </g>
                                        </svg>{/*end::Svg Icon*/}</span>			          </span>
                                    <div className="d-flex flex-column flex-grow-1 mr-2">
                                      <a href="#" className="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1">Another
                                        purpose persuade</a>
                                      <span className="text-muted font-size-sm">Due in 2 Days</span>
                                    </div>
                                    <span className="font-weight-bolder text-warning py-1 font-size-lg">+28%</span>
                                  </div>
                                  {/*end: Item*/}
                                  {/*begin: Item*/}
                                  <div className="d-flex align-items-center bg-light-success rounded p-5 mb-5">
                                    <span className="svg-icon svg-icon-success mr-5">
                                      <span className="svg-icon svg-icon-lg">{/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg*/}<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                          <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                            <rect x={0} y={0} width={24} height={24} />
                                            <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fillRule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) " />
                                            <path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                          </g>
                                        </svg>{/*end::Svg Icon*/}</span>			          </span>
                                    <div className="d-flex flex-column flex-grow-1 mr-2">
                                      <a href="#" className="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1">Would
                                        be to people</a>
                                      <span className="text-muted font-size-sm">Due in 2 Days</span>
                                    </div>
                                    <span className="font-weight-bolder text-success py-1 font-size-lg">+50%</span>
                                  </div>
                                  {/*end: Item*/}
                                  {/*begin: Item*/}
                                  <div className="d-flex align-items-center bg-light-danger rounded p-5 mb-5">
                                    <span className="svg-icon svg-icon-danger mr-5">
                                      <span className="svg-icon svg-icon-lg">{/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Group-chat.svg*/}<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                          <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                            <rect x={0} y={0} width={24} height={24} />
                                            <path d="M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z" fill="#000000" />
                                            <path d="M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z" fill="#000000" opacity="0.3" />
                                          </g>
                                        </svg>{/*end::Svg Icon*/}</span>			          </span>
                                    <div className="d-flex flex-column flex-grow-1 mr-2">
                                      <a href="#" className="font-weight-normel text-dark-75 text-hover-primary font-size-lg mb-1">Purpose
                                        would be to persuade</a>
                                      <span className="text-muted font-size-sm">Due in 2 Days</span>
                                    </div>
                                    <span className="font-weight-bolder text-danger py-1 font-size-lg">-27%</span>
                                  </div>
                                  {/*end: Item*/}
                                  {/*begin: Item*/}
                                  <div className="d-flex align-items-center bg-light-info rounded p-5">
                                    <span className="svg-icon svg-icon-info mr-5">
                                      <span className="svg-icon svg-icon-lg">{/*begin::Svg Icon | path:assets/media/svg/icons/General/Attachment2.svg*/}<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                          <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                            <rect x={0} y={0} width={24} height={24} />
                                            <path d="M11.7573593,15.2426407 L8.75735931,15.2426407 C8.20507456,15.2426407 7.75735931,15.6903559 7.75735931,16.2426407 C7.75735931,16.7949254 8.20507456,17.2426407 8.75735931,17.2426407 L11.7573593,17.2426407 L11.7573593,18.2426407 C11.7573593,19.3472102 10.8619288,20.2426407 9.75735931,20.2426407 L5.75735931,20.2426407 C4.65278981,20.2426407 3.75735931,19.3472102 3.75735931,18.2426407 L3.75735931,14.2426407 C3.75735931,13.1380712 4.65278981,12.2426407 5.75735931,12.2426407 L9.75735931,12.2426407 C10.8619288,12.2426407 11.7573593,13.1380712 11.7573593,14.2426407 L11.7573593,15.2426407 Z" fill="#000000" opacity="0.3" transform="translate(7.757359, 16.242641) rotate(-45.000000) translate(-7.757359, -16.242641) " />
                                            <path d="M12.2426407,8.75735931 L15.2426407,8.75735931 C15.7949254,8.75735931 16.2426407,8.30964406 16.2426407,7.75735931 C16.2426407,7.20507456 15.7949254,6.75735931 15.2426407,6.75735931 L12.2426407,6.75735931 L12.2426407,5.75735931 C12.2426407,4.65278981 13.1380712,3.75735931 14.2426407,3.75735931 L18.2426407,3.75735931 C19.3472102,3.75735931 20.2426407,4.65278981 20.2426407,5.75735931 L20.2426407,9.75735931 C20.2426407,10.8619288 19.3472102,11.7573593 18.2426407,11.7573593 L14.2426407,11.7573593 C13.1380712,11.7573593 12.2426407,10.8619288 12.2426407,9.75735931 L12.2426407,8.75735931 Z" fill="#000000" transform="translate(16.242641, 7.757359) rotate(-45.000000) translate(-16.242641, -7.757359) " />
                                            <path d="M5.89339828,3.42893219 C6.44568303,3.42893219 6.89339828,3.87664744 6.89339828,4.42893219 L6.89339828,6.42893219 C6.89339828,6.98121694 6.44568303,7.42893219 5.89339828,7.42893219 C5.34111353,7.42893219 4.89339828,6.98121694 4.89339828,6.42893219 L4.89339828,4.42893219 C4.89339828,3.87664744 5.34111353,3.42893219 5.89339828,3.42893219 Z M11.4289322,5.13603897 C11.8194565,5.52656326 11.8194565,6.15972824 11.4289322,6.55025253 L10.0147186,7.96446609 C9.62419433,8.35499039 8.99102936,8.35499039 8.60050506,7.96446609 C8.20998077,7.5739418 8.20998077,6.94077682 8.60050506,6.55025253 L10.0147186,5.13603897 C10.4052429,4.74551468 11.0384079,4.74551468 11.4289322,5.13603897 Z M0.600505063,5.13603897 C0.991029355,4.74551468 1.62419433,4.74551468 2.01471863,5.13603897 L3.42893219,6.55025253 C3.81945648,6.94077682 3.81945648,7.5739418 3.42893219,7.96446609 C3.0384079,8.35499039 2.40524292,8.35499039 2.01471863,7.96446609 L0.600505063,6.55025253 C0.209980772,6.15972824 0.209980772,5.52656326 0.600505063,5.13603897 Z" fill="#000000" opacity="0.3" transform="translate(6.014719, 5.843146) rotate(-45.000000) translate(-6.014719, -5.843146) " />
                                            <path d="M17.9142136,15.4497475 C18.4664983,15.4497475 18.9142136,15.8974627 18.9142136,16.4497475 L18.9142136,18.4497475 C18.9142136,19.0020322 18.4664983,19.4497475 17.9142136,19.4497475 C17.3619288,19.4497475 16.9142136,19.0020322 16.9142136,18.4497475 L16.9142136,16.4497475 C16.9142136,15.8974627 17.3619288,15.4497475 17.9142136,15.4497475 Z M23.4497475,17.1568542 C23.8402718,17.5473785 23.8402718,18.1805435 23.4497475,18.5710678 L22.0355339,19.9852814 C21.6450096,20.3758057 21.0118446,20.3758057 20.6213203,19.9852814 C20.2307961,19.5947571 20.2307961,18.9615921 20.6213203,18.5710678 L22.0355339,17.1568542 C22.4260582,16.76633 23.0592232,16.76633 23.4497475,17.1568542 Z M12.6213203,17.1568542 C13.0118446,16.76633 13.6450096,16.76633 14.0355339,17.1568542 L15.4497475,18.5710678 C15.8402718,18.9615921 15.8402718,19.5947571 15.4497475,19.9852814 C15.0592232,20.3758057 14.4260582,20.3758057 14.0355339,19.9852814 L12.6213203,18.5710678 C12.2307961,18.1805435 12.2307961,17.5473785 12.6213203,17.1568542 Z" fill="#000000" opacity="0.3" transform="translate(18.035534, 17.863961) scale(1, -1) rotate(45.000000) translate(-18.035534, -17.863961) " />
                                          </g>
                                        </svg>{/*end::Svg Icon*/}</span>			          </span>
                                    <div className="d-flex flex-column flex-grow-1 mr-2">
                                      <a href="#" className="font-weight-normel text-dark-75 text-hover-primary font-size-lg mb-1">The
                                        best product</a>
                                      <span className="text-muted font-size-sm">Due in 2 Days</span>
                                    </div>
                                    <span className="font-weight-bolder text-info py-1 font-size-lg">+8%</span>
                                  </div>
                                  {/*end: Item*/}
                                </div>
                                {/*end::Section*/}
                              </div>
                              {/*end::Tabpane*/}
                              {/*begin::Tabpane*/}
                              <div className="tab-pane fade pt-2 pr-5 mr-n5" id="kt_quick_panel_notifications" role="tabpanel">
                                {/*begin::Nav*/}
                                <div className="navi navi-icon-circle navi-spacer-x-0">
                                  {/*begin::Item*/}
                                  <a href="#" className="navi-item">
                                    <div className="navi-link rounded">
                                      <div className="symbol symbol-50 mr-3">
                                        <div className="symbol-label"><i className="flaticon-bell text-success icon-lg" /></div>
                                      </div>
                                      <div className="navi-text">
                                        <div className="font-weight-bold font-size-lg">
                                          5 new user generated report
                                        </div>
                                        <div className="text-muted">
                                          Reports based on sales
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                  {/*end::Item*/}
                                  {/*begin::Item*/}
                                  <a href="#" className="navi-item">
                                    <div className="navi-link rounded">
                                      <div className="symbol symbol-50 mr-3">
                                        <div className="symbol-label"><i className="flaticon2-box text-danger icon-lg" /></div>
                                      </div>
                                      <div className="navi-text">
                                        <div className="font-weight-bold  font-size-lg">
                                          2 new items submited
                                        </div>
                                        <div className="text-muted">
                                          by Grog John
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                  {/*end::Item*/}
                                  {/*begin::Item*/}
                                  <a href="#" className="navi-item">
                                    <div className="navi-link rounded">
                                      <div className="symbol symbol-50 mr-3">
                                        <div className="symbol-label"><i className="flaticon-psd text-primary icon-lg" /></div>
                                      </div>
                                      <div className="navi-text">
                                        <div className="font-weight-bold  font-size-lg">
                                          79 PSD files generated
                                        </div>
                                        <div className="text-muted">
                                          Reports based on sales
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                  {/*end::Item*/}
                                  {/*begin::Item*/}
                                  <a href="#" className="navi-item">
                                    <div className="navi-link rounded">
                                      <div className="symbol symbol-50 mr-3">
                                        <div className="symbol-label"><i className="flaticon2-supermarket text-warning icon-lg" />
                                        </div>
                                      </div>
                                      <div className="navi-text">
                                        <div className="font-weight-bold  font-size-lg">
                                          $2900 worth producucts sold
                                        </div>
                                        <div className="text-muted">
                                          Total 234 items
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                  {/*end::Item*/}
                                  {/*begin::Item*/}
                                  <a href="#" className="navi-item">
                                    <div className="navi-link rounded">
                                      <div className="symbol symbol-50 mr-3">
                                        <div className="symbol-label"><i className="flaticon-paper-plane-1 text-success icon-lg" />
                                        </div>
                                      </div>
                                      <div className="navi-text">
                                        <div className="font-weight-bold  font-size-lg">
                                          4.5h-avarage response time
                                        </div>
                                        <div className="text-muted">
                                          Fostest is Barry
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                  {/*end::Item*/}
                                  {/*begin::Item*/}
                                  <a href="#" className="navi-item">
                                    <div className="navi-link rounded">
                                      <div className="symbol symbol-50 mr-3">
                                        <div className="symbol-label"><i className="flaticon-safe-shield-protection text-danger icon-lg" /></div>
                                      </div>
                                      <div className="navi-text">
                                        <div className="font-weight-bold  font-size-lg">
                                          3 Defence alerts
                                        </div>
                                        <div className="text-muted">
                                          40% less alerts thar last week
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                  {/*end::Item*/}
                                  {/*begin::Item*/}
                                  <a href="#" className="navi-item">
                                    <div className="navi-link rounded">
                                      <div className="symbol symbol-50 mr-3">
                                        <div className="symbol-label"><i className="flaticon-notepad text-primary icon-lg" /></div>
                                      </div>
                                      <div className="navi-text">
                                        <div className="font-weight-bold  font-size-lg">
                                          Avarage 4 blog posts per author
                                        </div>
                                        <div className="text-muted">
                                          Most posted 12 time
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                  {/*end::Item*/}
                                  {/*begin::Item*/}
                                  <a href="#" className="navi-item">
                                    <div className="navi-link rounded">
                                      <div className="symbol symbol-50 mr-3">
                                        <div className="symbol-label"><i className="flaticon-users-1 text-warning icon-lg" /></div>
                                      </div>
                                      <div className="navi-text">
                                        <div className="font-weight-bold  font-size-lg">
                                          16 authors joined last week
                                        </div>
                                        <div className="text-muted">
                                          9 photodrapehrs, 7 designer
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                  {/*end::Item*/}
                                  {/*begin::Item*/}
                                  <a href="#" className="navi-item">
                                    <div className="navi-link rounded">
                                      <div className="symbol symbol-50 mr-3">
                                        <div className="symbol-label"><i className="flaticon2-box text-info icon-lg" /></div>
                                      </div>
                                      <div className="navi-text">
                                        <div className="font-weight-bold  font-size-lg">
                                          2 new items have been submited
                                        </div>
                                        <div className="text-muted">
                                          by Grog John
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                  {/*end::Item*/}
                                  {/*begin::Item*/}
                                  <a href="#" className="navi-item">
                                    <div className="navi-link rounded">
                                      <div className="symbol symbol-50 mr-3">
                                        <div className="symbol-label"><i className="flaticon2-download text-success icon-lg" /></div>
                                      </div>
                                      <div className="navi-text">
                                        <div className="font-weight-bold  font-size-lg">
                                          2.8 GB-total downloads size
                                        </div>
                                        <div className="text-muted">
                                          Mostly PSD end AL concepts
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                  {/*end::Item*/}
                                  {/*begin::Item*/}
                                  <a href="#" className="navi-item">
                                    <div className="navi-link rounded">
                                      <div className="symbol symbol-50 mr-3">
                                        <div className="symbol-label"><i className="flaticon2-supermarket text-danger icon-lg" />
                                        </div>
                                      </div>
                                      <div className="navi-text">
                                        <div className="font-weight-bold  font-size-lg">
                                          $2900 worth producucts sold
                                        </div>
                                        <div className="text-muted">
                                          Total 234 items
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                  {/*end::Item*/}
                                  {/*begin::Item*/}
                                  <a href="#" className="navi-item">
                                    <div className="navi-link rounded">
                                      <div className="symbol symbol-50 mr-3">
                                        <div className="symbol-label"><i className="flaticon-bell text-primary icon-lg" /></div>
                                      </div>
                                      <div className="navi-text">
                                        <div className="font-weight-bold  font-size-lg">
                                          7 new user generated report
                                        </div>
                                        <div className="text-muted">
                                          Reports based on sales
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                  {/*end::Item*/}
                                  {/*begin::Item*/}
                                  <a href="#" className="navi-item">
                                    <div className="navi-link rounded">
                                      <div className="symbol symbol-50 mr-3">
                                        <div className="symbol-label"><i className="flaticon-paper-plane-1 text-success icon-lg" />
                                        </div>
                                      </div>
                                      <div className="navi-text">
                                        <div className="font-weight-bold  font-size-lg">
                                          4.5h-avarage response time
                                        </div>
                                        <div className="text-muted">
                                          Fostest is Barry
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                  {/*end::Item*/}
                                </div>
                                {/*end::Nav*/}
                              </div>
                              {/*end::Tabpane*/}
                              {/*begin::Tabpane*/}
                              <div className="tab-pane fade pt-3 pr-5 mr-n5" id="kt_quick_panel_settings" role="tabpanel">
                                <form className="form">
                                  {/*begin::Section*/}
                                  <div>
                                    <h5 className="font-weight-bold mb-3">Customer Care</h5>
                                    <div className="form-group mb-0 row align-items-center">
                                      <label className="col-8 col-form-label">Enable Notifications:</label>
                                      <div className="col-4 d-flex justify-content-end">
                                        <span className="switch switch-success switch-sm">
                                          <label>
                                            <input type="checkbox" defaultChecked="checked" name="select" />
                                            <span />
                                          </label>
                                        </span>
                                      </div>
                                    </div>
                                    <div className="form-group mb-0 row align-items-center">
                                      <label className="col-8 col-form-label">Enable Case Tracking:</label>
                                      <div className="col-4 d-flex justify-content-end">
                                        <span className="switch switch-success switch-sm">
                                          <label>
                                            <input type="checkbox" name="quick_panel_notifications_2" />
                                            <span />
                                          </label>
                                        </span>
                                      </div>
                                    </div>
                                    <div className="form-group mb-0 row align-items-center">
                                      <label className="col-8 col-form-label">Support Portal:</label>
                                      <div className="col-4 d-flex justify-content-end">
                                        <span className="switch switch-success switch-sm">
                                          <label>
                                            <input type="checkbox" defaultChecked="checked" name="select" />
                                            <span />
                                          </label>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  {/*end::Section*/}
                                  <div className="separator separator-dashed my-6" />
                                  {/*begin::Section*/}
                                  <div className="pt-2">
                                    <h5 className="font-weight-bold mb-3">Reports</h5>
                                    <div className="form-group mb-0 row align-items-center">
                                      <label className="col-8 col-form-label">Generate Reports:</label>
                                      <div className="col-4 d-flex justify-content-end">
                                        <span className="switch switch-sm switch-danger">
                                          <label>
                                            <input type="checkbox" defaultChecked="checked" name="select" />
                                            <span />
                                          </label>
                                        </span>
                                      </div>
                                    </div>
                                    <div className="form-group mb-0 row align-items-center">
                                      <label className="col-8 col-form-label">Enable Report Export:</label>
                                      <div className="col-4 d-flex justify-content-end">
                                        <span className="switch switch-sm switch-danger">
                                          <label>
                                            <input type="checkbox" name="select" />
                                            <span />
                                          </label>
                                        </span>
                                      </div>
                                    </div>
                                    <div className="form-group mb-0 row align-items-center">
                                      <label className="col-8 col-form-label">Allow Data Collection:</label>
                                      <div className="col-4 d-flex justify-content-end">
                                        <span className="switch switch-sm switch-danger">
                                          <label>
                                            <input type="checkbox" defaultChecked="checked" name="select" />
                                            <span />
                                          </label>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  {/*end::Section*/}
                                  <div className="separator separator-dashed my-6" />
                                  {/*begin::Section*/}
                                  <div className="pt-2">
                                    <h5 className="font-weight-bold mb-3">Memebers</h5>
                                    <div className="form-group mb-0 row align-items-center">
                                      <label className="col-8 col-form-label">Enable Member singup:</label>
                                      <div className="col-4 d-flex justify-content-end">
                                        <span className="switch switch-sm switch-primary">
                                          <label>
                                            <input type="checkbox" defaultChecked="checked" name="select" />
                                            <span />
                                          </label>
                                        </span>
                                      </div>
                                    </div>
                                    <div className="form-group mb-0 row align-items-center">
                                      <label className="col-8 col-form-label">Allow User Feedbacks:</label>
                                      <div className="col-4 d-flex justify-content-end">
                                        <span className="switch switch-sm switch-primary">
                                          <label>
                                            <input type="checkbox" name="select" />
                                            <span />
                                          </label>
                                        </span>
                                      </div>
                                    </div>
                                    <div className="form-group mb-0 row align-items-center">
                                      <label className="col-8 col-form-label">Enable Customer Portal:</label>
                                      <div className="col-4 d-flex justify-content-end">
                                        <span className="switch switch-sm switch-primary">
                                          <label>
                                            <input type="checkbox" defaultChecked="checked" name="select" />
                                            <span />
                                          </label>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  {/*end::Section*/}
                                </form>
                              </div>
                              {/*end::Tabpane*/}
                            </div>
                          </div>
                          {/*end::Content*/}
                        </div>
                        {/*end::Quick Panel*/}
                        {/*begin::Scrolltop*/}
                        <div id="kt_scrolltop" className="scrolltop">
                          <span className="svg-icon">{/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Up-2.svg*/}<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                              <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                <polygon points="0 0 24 0 24 24 0 24" />
                                <rect fill="#000000" opacity="0.3" x={11} y={10} width={2} height={10} rx={1} />
                                <path d="M6.70710678,12.7071068 C6.31658249,13.0976311 5.68341751,13.0976311 5.29289322,12.7071068 C4.90236893,12.3165825 4.90236893,11.6834175 5.29289322,11.2928932 L11.2928932,5.29289322 C11.6714722,4.91431428 12.2810586,4.90106866 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L12.0300757,7.38413782 L6.70710678,12.7071068 Z" fill="#000000" fillRule="nonzero" />
                              </g>
                            </svg>{/*end::Svg Icon*/}</span></div>
                        {/*end::Scrolltop*/}
                        {/* Modal*/}
                        <div className="modal fade" id="exampleModalCenter" data-backdrop="static" tabIndex={-1} role="dialog" aria-labelledby="staticBackdrop" aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                              <div className="card card-custom">
                                <div className="card-header">
                                  <h3 className="card-title">
                                    Add Product
                                  </h3>
                                </div>
                                <AddProduct />
                              </div>
                            </div>
                          </div>
                        </div>
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