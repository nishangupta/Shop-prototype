import cartTypes from './cartTypes'
import { cartAdd } from './cartUtils'

const initialState = {
  products: [],
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartTypes.ADD_TO_CART:
      return {
        ...state,
        products: cartAdd(state.products, action.payload),
      }

    case cartTypes.CART_DECREMENT:
      let newCart = state.products.map((product) => {
        if (product.id === action.payload) {
          if (product.quantity === 1) {
            return { ...product }
          }
          return { ...product, quantity: product.quantity - 1 }
        }
      })
      return {
        ...state,
        products: newCart,
      }

    case cartTypes.REMOVE_FROM_CART:
      let filteredCart = state.products.filter(
        (product) => product.id !== action.payload
      )
      return {
        ...state,
        products: filteredCart,
      }

    case cartTypes.CLEAR_CART:
      return {
        ...state,
        products: [],
      }
    default:
      return state
  }
}

export default cartReducer
