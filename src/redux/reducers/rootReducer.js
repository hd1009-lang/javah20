import {userReducer, userRegister, userDetails, listUsers, userDelete} from "./userReducer";
import currencyReducer from "./currencyReducer";
import {productReducer, productSearch, productDelete} from "./productReducer";
import blogReducer from "./blogReducer";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";
import compareReducer from "./compareReducer";
import {orderList} from "./orderReducer";
import { combineReducers } from "redux";
import { createMultilanguageReducer } from "redux-multilanguage";
import reducers from "../../admin/reducers"

const rootReducer = combineReducers({
  multilanguage: createMultilanguageReducer({ currentLanguageCode: "en" }),
  ...reducers,
  loginData: userReducer,
  registerData: userRegister,
  listUsersData:listUsers,
  userData: userDetails,
  userDeleteData: userDelete,
  currencyData: currencyReducer,
  productData: productReducer,
  productDeleteData: productDelete,
  searchedProductData: productSearch,
  blogData: blogReducer,
  cartData: cartReducer,
  orderData: orderList,
  wishlistData: wishlistReducer,
  compareData: compareReducer
});

export default rootReducer;
