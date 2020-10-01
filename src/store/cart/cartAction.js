import cartTypes from './cartTypes'

export const addToCart = (product) => {
  return (dispatch) => {
    dispatch({ type: cartTypes.ADD_TO_CART, payload: product })
  }
}

export const cartDecrement = (id) => {
  return (dispatch) => {
    dispatch({ type: cartTypes.CART_DECREMENT, payload: id })
  }
}
export const removeFromCart = (id) => {
  return (dispatch) => {
    dispatch({ type: cartTypes.REMOVE_FROM_CART, payload: id })
  }
}

export const clearCart = () => {
  return (dispatch) => {
    dispatch({ type: cartTypes.CLEAR_CART })
  }
}
