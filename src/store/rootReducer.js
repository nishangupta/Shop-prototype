import { combineReducers } from 'redux'
import shopReducer from './shop/shopReducer'
import userReducer from './user/userReducer'
import cartReducer from './cart/cartReducer'

const rootReducer = combineReducers({
  shop: shopReducer,
  authUser: userReducer,
  cart: cartReducer,
})

export default rootReducer
