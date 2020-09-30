import { combineReducers } from 'redux'
import shopReducer from './shop/shopReducer'
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
  shop: shopReducer,
  authUser: userReducer,
})

export default rootReducer
