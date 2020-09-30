import userTypes from './userTypes'
import { auth, db } from '../../firebase'

export const setUser = (user) => {
  return (dispatch) => {
    dispatch({ type: userTypes.SET_USER, payload: user })
  }
}
export const logout = () => {
  return (dispatch) => {
    dispatch({ type: userTypes.LOGOUT })
  }
}
export const emailSignin = ({ email, password }) => {
  return (dispatch) => {
    auth.signInWithEmailAndPassword(email, password).then(
      (user) => {
        dispatch({ type: userTypes.EMAIL_SIGNIN_SUCCESS, payload: user })
      },
      (err) => ({
        type: userTypes.EMAIL_SIGNIN_FAIL,
      })
    )
  }
}
export const emailSignup = ({ email, password, username }) => {
  return (dispatch) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((registeredUser) => {
        console.log('created user:' + email)
        return db.collection('users').doc(registeredUser.user.uid).set({
          username,
          initials: username[0],
        })
      })
      .then(
        () =>
          dispatch({
            type: userTypes.EMAIL_SIGNUP_SUCCESS,
            payload: { email, password, username },
          }),
        (err) => dispatch({ type: userTypes.EMAIL_SIGNUP_FAIL })
      )
  }
}
