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
import LikedItems from "../RandomPick/LikedItems"
import store from "../../Redux/store"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
 
const Pages = () => {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/likedItems" component={LikedItems} />
          <Route exact path='/Explore' component={Explore} />
          <Route exact path='/contact' component={Contact} /> 
          <Route exact path='/RandomPick' component={Tours} /> 
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </Switch>
        <Footer />
      </Router> 
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default Pages
