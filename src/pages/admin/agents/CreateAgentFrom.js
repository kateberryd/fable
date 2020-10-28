
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from 'react-redux'

import Alert from '../../../components/alert/alert'

// Validation schema
const CreateAgentSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, 'Username must be more than 2 characters!')
      .max(50, 'Username can not be more than 50 characters!')
      .required('Username field is required '),
    phone: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Phone number field is required '),
    email: Yup.string().email('Invalid email').required('Email field is required'),
    center: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Center field is required'),
    password: Yup.string()
        .label('Password')
        .min(7, 'Password must be atleast 8 characters!')
        .max(50, 'Too Long!')
        .required('Password field is required'),
    confirmPassword: Yup.string()
        .label('Confirm Password')
        .required('Confirm password field is required ')
        .test('passwords-match', 'Passwords does not match', function(value) {
            return this.parent.password === value;
        }),
  })

export function CreateAgentForm({createAgent, auth, }) {
 const error = useSelector(state => state.agent.error);
  return(
    <Formik
    initialValues={{
        username: '',
        phone: '',
        email: '',
        center: '',
        password: '',
        confirmPassword: '',
        adminId: auth.user._id
       
    }}
    validationSchema={CreateAgentSchema}
    onSubmit={values => {
        createAgent(values);
    }}
    >
    {({ errors, touched }) => (
        <Form className="form" id="kt_form">
        <Alert />
        <div className="row justify-content-center">
        {error && <p className='text-danger'>{error.username}</p>}
        <div className="col-xl-9">
            {/*begin::Wizard Step 1*/}
            <div className="my-5 step" >
            <h5 className="text-dark font-weight-bold mb-10">Agent's Profile Details:</h5>
           
            {/*end::Group*/}
            {/*begin::Group*/}
            <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">Username</label>
                <div className="col-lg-9 col-xl-9">
                 <Field className="form-control form-control-solid form-control-lg" name="username"  type="text" />
                    {  
                        errors.username && touched.username ? (
                        <div className="text-danger">{errors.username}</div>
                    ) : null}
                </div>
            </div>
            {/*end::Group*/}
      
            {/*begin::Group*/}
            <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">Contact Phone</label>
                <div className="col-lg-9 col-xl-9">
                <div className="input-group input-group-solid input-group-lg">
                    <div className="input-group-prepend"><span className="input-group-text"><i className="la la-phone" /></span></div>
                    <Field type="text" className="form-control form-control-solid form-control-lg" name="phone"  defaultValue={+2349034567810} placeholder="Phone" />  
                </div>
                {errors.phone && touched.phone ? (
                     <div className="text-danger">{errors.phone}</div>
                ) : null}
                <span className="form-text text-muted">Enter valid NG phone number(e.g: +2349034567810).</span>
                </div>
            </div>
            {/*end::Group*/}
            {/*begin::Group*/}
            <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">Email Address</label>
                <div className="col-lg-9 col-xl-9">
                <div className="input-group input-group-solid input-group-lg">
                    <div className="input-group-prepend"><span className="input-group-text"><i className="la la-at" /></span></div>
                    <Field type="text" className="form-control form-control-solid form-control-lg"  name="email"  /> 
                </div>
                {errors.email && touched.email ? (
                        <div className="text-danger">{errors.email}</div>
                    ) : null}
                </div>
            </div>
            {/*end::Group*/}
            
             {/*begin::Group*/}
             <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">Center</label>
                <div className="col-lg-9 col-xl-9">
                <div className="input-group input-group-solid input-group-lg">
                    <div className="input-group-prepend"><span className="input-group-text"><i className="la la-home" /></span></div>
                    <Field type="text" className="form-control form-control-solid form-control-lg" name="center"  />
                </div>
                  {errors.center && touched.center ? (
                     <div className="text-danger">{errors.center}</div>
                  ) : null}
                </div>
            </div>
            {/*end::Group*/}
            
             {/*begin::Group*/}
             <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">Password</label>
                <div className="col-lg-9 col-xl-9">
                <div className="input-group input-group-solid input-group-lg">
                    <div className="input-group-prepend"><span className="input-group-text"><i className="la la-lock" /></span></div>
                    <Field type="password" className="form-control form-control-solid form-control-lg" name="password"  />
                </div>
                  {errors.password && touched.password ? (
                     <div className="text-danger">{errors.password}</div>
                    ) : null}
                </div>
            </div>
            {/*end::Group*/}
            
            
             {/*begin::Group*/}
             <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">Confirm Password</label>
                <div className="col-lg-9 col-xl-9">
                <div className="input-group input-group-solid input-group-lg">
                    <div className="input-group-prepend"><span className="input-group-text"><i className="la la-lock" /></span></div>
                    <Field type="password" className="form-control form-control-solid form-control-lg" name="confirmPassword"  />
                </div>
                {errors.confirmPassword && touched.confirmPassword ? (
                        <div className="text-danger">{errors.confirmPassword}</div>
                ) : null}
                </div>
            </div>
            {/*end::Group*/}
            </div>
            {/*end::Wizard Step 1*/}
            
            {/*begin::Wizard Actions*/}
            <div className="d-flex justify-content-between border-top pt-10 mt-15">
            
            <div>
                <button type="submit" className="btn btn-success font-weight-bolder px-9 py-4" >
                Submit
                </button>
                
            </div>
            </div>
            {/*end::Wizard Actions*/}
        </div>
        </div>
   
        </Form>
    )}
    </Formik>
  )
}
