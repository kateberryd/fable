
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import MySelect from './mySelect';
import StateAndLocal from '../../../utils/nigeriaState';


// Validation schema
const CreateStationSchema = Yup.object().shape({
    station_name: Yup.string()
      .min(2, 'Station name must be more than 2 characters!')
      .max(50, 'Station name can not be more than 50 characters!')
      .required('Station name field is required '),
    station_phone: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Station phone number field is required '),
    station_email: Yup.string().email('Invalid email').required('Email field is required'),
    station_address: Yup.string()
      
        .required('Station address field is required'),
    station_city: Yup.string()
    
        .required('Station city field is required'),
    station_state: Yup.string()
       
        .required('Station state field is required'),
    station_lga: Yup.string()
       
        .required('Station LGA field is required'),
   
  })

export function CreateStationForm({createStation}) {
  return(
    <Formik
    initialValues={{
        station_name: '',
        station_phone: '',
        station_email: '',
        station_address: '',
        station_city: '',
        station_state: '',
        station_lga: '',
       
       
    }}
    validationSchema={CreateStationSchema}
    onSubmit={values => {
        console.log(values)

        
        console.log(StateAndLocal);
       
    }}
    >
    {({ errors, touched, values, setFieldValue, setFieldTouched }) => (
        <Form className="form" id="kt_form">
       
        <div className="row justify-content-center">
        <div className="col-xl-9">
            {/*begin::Wizard Step 1*/}
            <div className="my-5 step" >
            <h5 className="text-dark font-weight-bold mb-10">Upload Station's Details:</h5>
           
            {/*end::Group*/}
            {/*begin::Group*/}
            <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">Station Name</label>
                <div className="col-lg-9 col-xl-9">
                 <Field className="form-control form-control-solid form-control-lg" name="station_name"  type="text" />
                    {  
                        errors.station_name && touched.station_name ? (
                        <div className="text-danger">{errors.station_name}</div>
                    ) : null}
                </div>
            </div>
            {/*end::Group*/}
      
            {/*begin::Group*/}
            <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">Station Phone Number</label>
                <div className="col-lg-9 col-xl-9">
                <div className="input-group input-group-solid input-group-lg">
                    <div className="input-group-prepend"><span className="input-group-text"><i className="la la-phone" /></span></div>
                    <Field type="text" className="form-control form-control-solid form-control-lg" name="station_phone"  defaultValue={+2349034567810} placeholder="Phone" />  
                </div>
                {errors.station_phone && touched.station_phone ? (
                     <div className="text-danger">{errors.station_phone}</div>
                ) : null}
                <span className="form-text text-muted">Enter valid NG phone number(e.g: +2349034567810).</span>
                </div>
            </div>
            {/*end::Group*/}
            {/*begin::Group*/}
            <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">Station Email Address</label>
                <div className="col-lg-9 col-xl-9">
                <div className="input-group input-group-solid input-group-lg">
                    <div className="input-group-prepend"><span className="input-group-text"><i className="la la-at" /></span></div>
                    <Field type="text" className="form-control form-control-solid form-control-lg"  name="station_email"  /> 
                </div>
                {errors.station_email && touched.station_email ? (
                        <div className="text-danger">{errors.station_email}</div>
                    ) : null}
                </div>
            </div>
            {/*end::Group*/}
            
             {/*begin::Group*/}
             <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">Station Address</label>
                <div className="col-lg-9 col-xl-9">
                <div className="input-group input-group-solid input-group-lg">
                    <div className="input-group-prepend"><span className="input-group-text"><i className="la la-home" /></span></div>
                    <Field type="text" className="form-control form-control-solid form-control-lg" name="station_address"  />
                </div>
                  {errors.station_address && touched.station_address ? (
                     <div className="text-danger">{errors.station_address}</div>
                  ) : null}
                </div>
            </div>
            {/*end::Group*/}
            
            
            <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">Station City</label>
                <div className="col-lg-9 col-xl-9">
                <MySelect
                    value={values.station_city}
                    onChange={setFieldValue}
                    onBlur={setFieldTouched}
                    error={errors.station_city}
                    touched={touched.station_city}
                    name="station_city"
                    options={StateAndLocal}
                    
                />
                 
                </div>
            </div>
            {/*end::Group*/}
            
            <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">Station State</label>
                <div className="col-lg-9 col-xl-9">
                <MySelect
                    value={values.station_state}
                    onChange={setFieldValue}
                    onBlur={setFieldTouched}
                    error={errors.station_state}
                    touched={touched.station_state}
                    name="station_state"
                    options={StateAndLocal}
                />
                 
                </div>
            </div>
            {/*end::Group*/}
            
            <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">Station LGA</label>
                <div className="col-lg-9 col-xl-9">
                <MySelect
                    value={values.station_lga}
                    onChange={setFieldValue}
                    onBlur={setFieldTouched}
                    error={errors.station_lga}
                    touched={touched.station_lga}
                    name="station_lga"
                    options={StateAndLocal}
                />
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
