import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createProduct} from '../../redux/product/action';

class AddProduct extends React.Component{
    constructor(){
        super()
        this.state = {
            title: '',
            price: '',
            productImage: null,
            showLoading: false,
            errors: {},
        }
    }
    handleSubmit = async event => {
        console.log(event);
        event.preventDefault();
        const {user} = this.props.authentication;
        const {title, price, productImage, showLoading} = this.state;
        const formData = {title, price, productImage, showLoading, user_id: user._id};
        this.setState({showLoading: true})
        this.props.createProduct(formData);
       
    }
    handleChange =  event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
       
    }
    
    fileChangedHandler = (event) => {
        this.setState({ productImage: event.target.files[0] })
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
        const {showLoading} = this.state;
        return(
            
              <form onSubmit={this.handleSubmit}>
              <div className="card-body">
                <div className="form-group mb-8">
                  <div className="alert alert-custom alert-default" role="alert">
                    <div className="alert-icon"><i className="flaticon-info text-primary" /></div>
                    <div className="alert-text">
                      Fill in every information properly
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="title">Product Title</label>
                  <input type="text" className="form-control" id="title" name="title" placeholder="Title of Product" onChange={this.handleChange} />
                  <span className="form-text text-muted">Name of Product Everyone would see.</span>
                </div>
                <div className="form-group">
                  <label htmlFor="price">Product Price</label>
                  <input type="number" className="form-control" name="price" id="price" placeholder="Price of Product" onChange={this.handleChange} />
                  <span className="form-text text-muted">Be careful nut to raise the price too high above general cost</span>
                </div>
                
                <div className="form-group">
                  <label htmlFor="price">Product Image</label>
                  <input type="file" className="form-control" id="image" name="productImage" placeholder="Image of Product" onChange={this.fileChangedHandler}/>
                  <span className="form-text text-muted">Upload a very clear image</span>
                </div>
                {/* <div className="form-group">
                  <label htmlFor="exampleSelect1">Example select</label>
                  <select className="form-control" id="exampleSelect1">
                    <option>Yam</option>
                    <option>Beans</option>
                    <option>Cassava</option>
                    <option>Maize</option>
                    <option>Millet</option>
                  </select>
                </div> */}
              </div>
              <div className="card-footer">
                <button  type="submit"className="btn btn-primary mr-2" disabled={showLoading}>
                     {showLoading ? 'Loading...' : "Submit"}
                </button>
                <button type="reset" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
              </div>
            </form>
           
        )
    }
}


 AddProduct.propTypes = {
    authentication: PropTypes.object.isRequired,
    createProduct: PropTypes.func.isRequired
    
  }
  
  const mapStateToProps = (state) => ({
    authentication: state.authentication,
    
    
  })
  export default connect(mapStateToProps, {createProduct})(withRouter(AddProduct));