import React from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import NavBar from "./navbar"
import Footer from "./footer"

import Home from "./Home"
import TopRated from "./TopRated"
import LeaveRating from "./LeaveRating"
import Login from "./Login"
import ViewRealtor from "./ViewRealtor"

function App() {
  // const [formSubmitted, setFormSubmitted] = React.useState(false)

  // const handleSubmitted = () => {
  //   setFormSubmitted(!formSubmitted)
  // }

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/top-rated" component={TopRated} />
          <Route path="/leave-rating" component={LeaveRating} />
          <Route path="/login" component={Login} />
          <Route path="/view-realtor" component={ViewRealtor} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
