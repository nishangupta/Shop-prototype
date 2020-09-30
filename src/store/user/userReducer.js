import userTypes from './userTypes'

const initialState = {
  currentUser: null,
  error: null,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.SET_USER:
      return {
        ...state, // payload is {uid,email,displayName,initials}
        currentUser: action.payload,
        error: null,
      }

    case userTypes.EMAIL_SIGNIN_SUCCESS:
      console.log('email signin success')
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      }
    case userTypes.EMAIL_SIGNUP_SUCCESS:
      console.log('email signup success')
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      }
    case userTypes.LOGOUT:
      console.log('User logged out')
      return {
        ...state,
        currentUser: null,
        error: null,
      }
    case userTypes.EMAIL_SIGNIN_FAIL:
    case userTypes.EMAIL_SIGNUP_FAIL:
      console.log('Error logging/signingup')
      return {
        ...state,
        currentUser: null,
        error: 'signin error',
      }

    default:
      return state
  }
}

export default userReducer
