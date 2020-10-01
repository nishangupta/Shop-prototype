import React, { Suspense, lazy, Component } from 'react'
import './Default.css'
import 'react-toastify/dist/ReactToastify.css'
import './App.scss'
import { ToastContainer } from 'react-toastify'
import { Switch, Route } from 'react-router-dom'
import { auth, db } from './firebase'
import { connect } from 'react-redux'
import { setUser, logout } from './store/user/userAction'
import AppHeader from './components/AppHeader'
import Spinner from './components/Spinner'

const Homepage = lazy(() => import('./pages/Homepage'))
const Account = lazy(() => import('./pages/Account'))
const Cart = lazy(() => import('./pages/Cart'))
const SignupPage = lazy(() => import('./pages/SignupPage'))

class App extends Component {
  //setting user in the userState
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user)
        db.collection('users')
          .doc(user.uid)
          .get()
          .then((doc) => {
            const res = doc.data()
            this.props.setUser({
              uid: user.uid,
              email: user.email,
              displayName: res.username,
              initials: res.initials,
            })
          })
      } else {
        this.props.logout()
      }
    })
  }
  render() {
    return (
      <div className="app">
        <AppHeader />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/signup" component={SignupPage} />
          </Suspense>
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(setUser(user)),
    logout: () => dispatch(logout()),
  }
}
export default connect(null, mapDispatchToProps)(App)
