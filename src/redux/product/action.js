import axios from '../../utils/axios';
import { setAlert } from '../alert/action';
import {
    CREATE_PRODUCT,
    GET_PRODUCT,
    GET_ERRORS
} from '../constants/';


// Register User
export const createProduct = (formData, history) => async dispatch => {
    axios.post('/api/products/create_product',  {
            title: formData.title,
            price: formData.price,
            user_id: formData.user_id,
            productImage: formData.productImage.name,
        })
         .then(res => {
            
            console.log(res.data)
         })
         .catch(err => {
             console.log(err.response.data)
            //  dispatch({
            //      type: GET_ERRORS,
            //      payload: err.response.data
            //  })
         })
    }