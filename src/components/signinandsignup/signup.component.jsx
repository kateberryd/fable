import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { useFormik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { setAlert } from '../../redux/alert/action';
import { register } from '../../redux/authentication/action';
import { passwordRegExp } from '../../utils/others';
import Alert from '../alert/alert'
import 'react-toastify/dist/ReactToastify.css';
  class SignUp extends React.Component {
      constructor(){
        super();
        this.state = {
          username: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: '',
          showLoading: false,
          errors: {}
        }
      }
    
      handleSubmit = event => {
        event.preventDefault();
        const { username, email, phone, password, confirmpassword } = this.state;
        const {register, history} = this.props;
        const formData = { username, email, phone, password, confirmpassword }
        this.setState({ showLoading: true });
        register(formData, history);
        
      }
      handleChange =  event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
       
      }
        componentWillReceiveProps(nextProps){
          console.log(nextProps.errors)
          if(nextProps.errors){
            this.setState({errors: nextProps.errors, showLoading: false})
          }
        }
          render(){
            
          const {showLoading, errors} = this.state;
          return(
            <div>
                <ToastContainer />
                <div className="text-center mb-10 mb-lg-20">
               
                <h3 className>Sign Up</h3> 
                {errors.phone ? <div className="text-danger">{errors.phone}</div> : null}
                {errors.email ? <div className="text-danger">{errors.email}</div> : null}
                {errors.username ? <div className="text-danger">{errors.username}</div> : null}
                {errors.password ? <div className="text-danger">{errors.password}</div> : null}
                {errors.confirmPassword ? <div className="text-danger">{errors.confirmPassword}</div> : null}
                <form className="form text-left" id="kt_login_signup_form" onSubmit={this.handleSubmit} >
                  <p className="text-muted text-center mt-4 font-weight-bold">Enter your details to create your account</p>
                  <div className="form-group py-2 m-0">
                   
                  <input type="text" className='form-control h-auto border-0 px-0 placeholder-dark-75'  onChange={this.handleChange} placeholder="Username" name="username"  />
                   {errors.username ? <div className="text-danger">{errors.username}</div> : null}
                </div>
                <div className="form-group py-2 m-0 border-top">
                  <input  type="text" className='form-control h-auto border-0 px-0 placeholder-dark-75' type="text"  onChange={this.handleChange} placeholder="Email" name="email" autoComplete="off" />
                  {errors.email ? <div className="text-danger">{errors.email}</div> : null}
                </div>
                
                <div className="form-group py-2 m-0 border-top">
                  <input  type="text" className='form-control h-auto border-0 px-0 placeholder-dark-75' type="text"  onChange={this.handleChange} placeholder="Phone Number" name="phone"  />
                  {errors.email ? <div className="text-danger">{errors.email}</div> : null}
                </div>
                
                <div className="form-group py-2 m-0 border-top">
                  <input type="text" className='form-control h-auto border-0 px-0 placeholder-dark-75'  onChange={this.handleChange} type="password" placeholder="Password" name="password" />
                  {errors.password ? <div className="text-danger">{errors.password}</div> : null}
                </div>
                <div className="form-group py-2 m-0 border-top">
                  <input type="password" className='form-control h-auto border-0 px-0 placeholder-dark-75'   onChange={this.handleChange} type="password" placeholder="Confirm Password" name="confirmpassword" />
                  {errors.confirmpassword ? <div className="text-danger">{errors.confirmpassword}</div> : null}
                </div>
                <div className="form-group mt-5">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-outline font-weight-bold">
                      <input type="checkbox" name="agree" />
                      <span />
                      I Agree the <a href="#" className="ml-1">terms and conditions</a>.
                    </label>
                  </div>
                </div>
                <div className="form-group d-flex flex-wrap flex-center">
                  <button  type="submit" className="btn btn-primary btn-pill font-weight-bold px-9 py-4 my-3 mx-2" disabled={showLoading}>
                     {showLoading ? 'Loading...' : "Submit"}
                  </button>
                  <button id="kt_login_signup_cancel" className="btn btn-outline-primary btn-pill font-weight-bold px-9 py-4 my-3 mx-2">
                    Cancel
                  </button>
                </div>
              </form>
               
              </div>
            </div>
     
      )}
          }         
        SignUp.propTypes = {
            setAlert: PropTypes.func.isRequired,
            register: PropTypes.func.isRequired,
            
        }
        
        const mapStateToProps = state => ({
            authentication: state.authentication,
            errors: state.errors
           
        })


export default connect(mapStateToProps, {setAlert, register})(withRouter(SignUp));