import axios from 'axios';
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_RESET,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_RESET,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_RESET,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_REVIEW_FAIL,
  PRODUCT_REVIEW_REQUEST,
  PRODUCT_REVIEW_SUCCESS,
  PRODUCT_REVIEW_RESET,
  SEARCH_PRODUCTS_REQUEST,
  SEARCH_PRODUCTS_SUCCESS,
  SEARCH_PRODUCTS_FAIL
} from '../constants/productConstants';
import {BASE_URL} from '../constants/URL_SERVER';

export const listProducts = (keyword = '', pageNumber = '') => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get(`${BASE_URL}/products`);
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.response && error.response.data,
    });
  }
};

export const deleteProduct = (id) => async (dispatch,getState) => {
  try {
    dispatch({ type: PRODUCT_DELETE_REQUEST });
    //const {userLogin:{userInfo}}=getState()
    // const config={
    //   headers:{
    //     'Authorization':userInfo.token
    //   }
    // }
    await axios.delete(`${BASE_URL}/product/delete/${id}`);
    dispatch({
      type: PRODUCT_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload: error.response && error.response.data.msg,
    });
  }
};

export const createProduct = () => async (dispatch,getState) => {
  try {
    dispatch({ type: PRODUCT_CREATE_REQUEST });
    const {userLogin:{userInfo}}=getState()
    const config={
      headers:{
        'Authorization':userInfo.token
      }
    }
    const {data}=await axios.post(`/api/products/create`,{},config);
    dispatch({
      type: PRODUCT_CREATE_SUCCESS,
      payload:data
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_FAIL,
      payload: error.response && error.response.data.msg,
    });
  }
};


export const updateProduct = (user) => async (dispatch,getState) => {
  try {
    dispatch({ type: PRODUCT_UPDATE_REQUEST });
    const {userLogin:{userInfo}}=getState()
    const config={
      headers:{
        'Authorization':userInfo.token
      }
    }
    const {data}=await axios.put(`/api/products/${user.id}/edit`,user,config);
    dispatch({
      type: PRODUCT_UPDATE_SUCCESS,
    });
    dispatch({type:PRODUCT_DETAILS_SUCCESS,payload:data})
    // dispatch({
    //   type:NOTIFY,
    //   payload:{
    //     success:true,
    //     message:"C???p nh???t s???n ph???m th??nh c??ng"
    //   }
    // })
  } catch (error) {
    dispatch({
      type: PRODUCT_UPDATE_FAIL,
      payload: error.response && error.response.data.msg,
    });
  }
};
export const searchProducts = (searchString) => async(dispatch) => {
 
  try {
    //dispatch({ type: SEARCH_PRODUCTS_REQUEST });
    
    const {data} = await axios.post(`${BASE_URL}/product/search`, {searchString});
    dispatch({
      type: SEARCH_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_PRODUCTS_FAIL,
     // payload: error.response && error.response.data.msg,
      payload: [],
    });
  }
};



//fetch products
// export const fetchProducts = products => {
//   return dispatch => {
//     dispatch(fetchProductsSuccess(products));
//   };
// };
