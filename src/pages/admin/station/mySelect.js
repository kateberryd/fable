import React from 'react';
import Select from 'react-select';
// import 'react-select/dist/react-select.css';

class MySelect extends React.Component {
    handleChange = value => {
      // this is going to call setFieldValue and manually update values.topcis
      console.log(this.props.options);
      this.props.onChange(this.props.name, value);
    };
  
    handleBlur = () => {
      // this is going to call setFieldTouched and manually update touched.topcis
      this.props.onBlur(this.props.name,  true);
    };
  
    render() {
   
      return (
        <div style={{ margin: '1rem 0' }}>
          {/* <label htmlFor="color">Topics (select at least 3) </label> */}
          <Select
            id="color"
            options={this.props.options}
            multi={true}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            value={this.props.value}
            name={this.props.name}
          />
          {!!this.props.error &&
            this.props.touched && (
              <div style={{  marginTop: '.5rem' }} className="text-danger">{this.props.error}</div>
            )}
        </div>
      );
    }
  }
  
  
  export default MySelect;