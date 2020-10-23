import React from 'react';
import SignUp from '../../components/signinandsignup/signup.component';
import SignIn from '../../components/signinandsignup/signin.component';
import bgImage1 from '../../_assets/media/bg/bg-10.jpg';
import bgImage2 from '../../_assets/media/bg/bg-3.jpg';
import lightLogo from '../../_assets/media/logos/logo-light.png';
import darkLogo from '../../_assets/media/logos/logo-dark.png';
import userIcon from '../../_assets/media/users/300_21.jpg';

let styles = {
    bannerImage:{
        backgroundImage: bgImage1,
    },

    bodyHieght:{
        height: "100vh",
    },
   
}


const SignInPage = () => {
    document.title = 'Fabel | Login';
    return(
    <body id="kt_body" style={{backgroundImage: `url(${bgImage1})`, height:"100vh" }}
        className="quick-panel-right demo-panel-right offcanvas-right header-fixed subheader-enabled page-loading">
    <div className="d-flex flex-column flex-root">
    {/*begin::Login*/}
    <div className="login login-6 login-signin-on login-signin-on d-flex flex-row-fluid" id="kt_login">
      <div className="d-flex flex-column flex-lg-row flex-row-fluid text-center" style={{backgroundImage: `url(${bgImage2})`}}>
        {/*begin:Aside*/}
        <div className="d-flex w-100 flex-center p-15">
          <div className="login-wrapper">
            {/*begin:Aside Content*/}
            <div className="text-dark-75">
              <h2 className="mb-8 text-uppercase">Welcome to fable</h2>
              <a href="#">
                <img src="assets/media/logos/logo-dark.png" className="max-h-75px" alt="" />
              </a>
              <h3 className="mb-8 mt-22 font-weight-bold">Don't Have an Account?</h3>
              <button type="button" id="kt_login_signup" className="btn btn-outline-primary btn-pill py-4 px-9 font-weight-bold">Get An Account
              </button>
            </div>
            {/*end:Aside Content*/}
          </div>
        </div>
        {/*end:Aside*/}
        {/*begin:Divider*/}
        <div className="login-divider">
          <div />
        </div>
        {/*end:Divider*/}
        {/*begin:Content*/}
        <div className="d-flex w-100 flex-center p-15 position-relative overflow-hidden">
          <div className="login-wrapper">
            {/*begin:Sign In Form*/} 
      
            <div className="login-signin">
              <div className="text-center mb-10 mb-lg-20">
                <h2 className="font-weight-bold">Sign In</h2>
                <p className="text-muted font-weight-bold">Enter your username and password</p>
              </div>
               <SignIn />
            </div>
            {/*end:Sign In Form*/}
            {/*begin:Sign Up Form*/}
            <div className="login-signup">
              <SignUp />
            </div>
            {/*end:Sign Up Form*/}
            {/*begin:Forgot Password Form*/}
            <div className="login-forgot">
              <div className="text-center mb-10 mb-lg-20">
                <h3 className>Forgotten Password ?</h3>
                <p className="text-muted font-weight-bold">Enter your email to reset your password</p>
              </div>
              <form className="form text-left" id="kt_login_forgot_form">
                <div className="form-group py-2 m-0 border-bottom">
                  <input className="form-control h-auto border-0 px-0 placeholder-dark-75" type="text" placeholder="Email" name="email" autoComplete="off" />
                </div>
                <div className="form-group d-flex flex-wrap flex-center mt-10">
                  <button id="kt_login_forgot_submit" className="btn btn-primary btn-pill font-weight-bold px-9 py-4 my-3 mx-2">Submit
                  </button>
                  <button id="kt_login_forgot_cancel" className="btn btn-outline-primary btn-pill font-weight-bold px-9 py-4 my-3 mx-2">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
            {/*end:Forgot Password Form*/}
          </div>
        </div>
        {/*end:Content*/}
      </div>
    </div>
    {/*end::Login*/}
  </div>
  </body>

)
}
export default SignInPage;