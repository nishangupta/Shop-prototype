import React from 'react'
import './Default.css'
import './App.scss'
import { Switch, Route } from 'react-router-dom'
import AppHeader from './components/AppHeader'
import Homepage from './pages/Homepage'
import Account from './pages/Account'
import Cart from './pages/Cart'
import SignupPage from './pages/SignupPage'

function App() {
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

export default App
