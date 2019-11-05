import React from "react"
import Cookie from "js-cookie"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import NavBar from "./navbar"
import Home from "./Home"
import TopRated from "./TopRated"
import LeaveRating from "./LeaveRating"
import Login from "./Login"
import ViewRealtor from "./ViewRealtor"

function App() {
  const [loginStatus, setLoginStatus] = React.useState("NOT_LOGGEDIN")

  const handleSignOut = event => {
    event.preventDefault()
    setLoginStatus("NOT_LOGGEDIN")
    Cookie.remove("EMAIL")
    Cookie.remove("PASSWORD")
  }

  const handleSignIn = () => {
    setLoginStatus("LOGGEDIN")
  }

  return (
    <div className="App">
      <Router>
        <NavBar handleSignOut={handleSignOut} loginStatus={loginStatus} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/top-rated" component={TopRated} />
          <Route path="/leave-rating" component={LeaveRating} />
          <Route
            path="/login"
            render={props => <Login {...props} handleSignIn={handleSignIn} />}
          />
          <Route path="/view-realtor/:slug" component={ViewRealtor} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
