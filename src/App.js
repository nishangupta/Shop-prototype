import React from 'react'
import './Default.css'
import './App.scss'
import { Switch, Route } from 'react-router-dom'
import { auth, db } from './firebase'
import { connect } from 'react-redux'
import { setUser, logout } from './store/user/userAction'
import AppHeader from './components/AppHeader'

import Homepage from './pages/Homepage'
import Account from './pages/Account'
import Cart from './pages/Cart'
import SignupPage from './pages/SignupPage'

class App extends React.Component {
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
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/signup" component={SignupPage} />
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
