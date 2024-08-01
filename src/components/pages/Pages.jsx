import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import Explore from "../Explore/Explore"
import Contact from "../contact/Contact"
import Login from "../login/login"
import Register from "../register/register"
import Tours from "../RandomPick/Tours"
 
const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Explore' component={Explore} />
          <Route exact path='/contact' component={Contact} /> 
          <Route exact path='/RandomPick' component={Tours} /> 
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </Switch>
        <Footer />
      </Router> 
    </>
  )
}

export default Pages
