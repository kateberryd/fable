import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { login } from '../../redux/authentication/action';
import { setAlert } from '../../redux/alert/action';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class SignIn extends React.Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
            showLoading: false,
            errors: {},
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {username, password, showLoading} = this.state;
        const formData = {username, password, showLoading}
        const {login} = this.props;
        this.setState({showLoading: true})
        login(formData);
        console.log(formData);
       
    }
    handleChange =  event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
       
    }
  
    componentDidMount(){
      if(this.props.authentication.isAuthenticated){
        this.props.history.push('/dashboard')
      }
    }
    componentWillReceiveProps(nextProps){
      if(nextProps.authentication.isAuthenticated){
        this.props.history.push('/dashboard');
      }
      console.log(nextProps)
      if(nextProps.errors){
        this.setState({errors: nextProps.errors, showLoading: false})
      }
    }
      render(){
       const {showLoading, errors} = this.state;
        return(
            <div>
                <ToastContainer />
                <form className="form text-left "     onSubmit={this.handleSubmit}>
                <div id="kt_login_signin_form">
                {errors.message ? <div className="text-danger">{errors.message}</div> : null}
                <div className="form-group py-2 m-0">
                  <input className="form-control h-auto border-0 px-0 placeholder-dark-75" type="text" placeholder="Username" name="username" onChange={this.handleChange} autoComplete="off" />
                  
                </div>
                <div className="form-group py-2 border-top m-0">
                  <input className="form-control h-auto border-0 px-0 placeholder-dark-75" type="Password" placeholder="Password" name="password" onChange={this.handleChange} />
                </div>
                <div className="form-group d-flex flex-wrap justify-content-between align-items-center mt-5">
                  <div className="checkbox-inline">
                    <label className="checkbox m-0 text-muted font-weight-bold">
                      <input type="checkbox" name="remember" />
                      <span />
                      Remember me
                    </label>
                  </div>
                  <a href="javascript:;" id="kt_login_forgot" className="text-muted text-hover-primary font-weight-bold">Forget Password ?</a>
                </div>
                <div className="text-center mt-15">
                   <button  type="submit" className="btn btn-primary btn-pill font-weight-bold px-9 py-4 my-3 mx-2" disabled={showLoading}>
                     {showLoading ? 'Loading...' : "Submit"}
                  </button>
                </div>
                </div>
              </form>
              
            </div>
        )
    }
}

SignIn.propTypes = {
  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  authentication: state.authentication,
  errors: state.errors
})

export default connect(mapStateToProps, {setAlert, login})(withRouter(SignIn));