import React from 'react'
import { Link } from "react-router-dom"
import "./register.css"
export default function register() {
  return (
      <>
<div className="tab-content">
  <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
    <form className="forms">
      <div className="text-center mb-3">
        <p style={{color : "white"}}>Sign-up  with:</p>
        <button type="button" className="btn btn-link btn-floating mx-1">
        <a href="https://www.facebook.com/" style={{color : "white"}}><i className="fab fa-facebook-f"></i></a>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
        <a href="https://www.google.com/" style={{color : "white"}}><i className="fab fa-google"></i></a>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
        <a href="https://www.twitter.com/" style={{color : "white"}}><i className="fab fa-twitter"></i></a>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
        <a href="https://www.github.com/" style={{color : "white"}}><i className="fab fa-github"></i></a>
        </button>
      </div>

      <p className="text-center" style={{color : "white"}}>or:</p>


      <div className="form-outline mb-4">
        <input type="email" id="loginName" className="form-control" required style={{width:"30%", marginLeft:"35vw"}} />
        <label className="form-label" for="loginName" style={{marginLeft:"35vw",color:"white"}}>Email or username</label>
      </div>


      <div className="form-outline mb-4">
        <input type="password" id="loginPassword" className="form-control" required style={{width:"30%", marginLeft:"35vw"}}/>
        <label className="form-label" for="loginPassword" style={{marginLeft:"35vw",color:"white"}}>Password</label>
      </div>

      <div className="form-outline mb-4">
        <input type="password" id="loginPassword" className="form-control" required style={{width:"30%", marginLeft:"35vw"}}/>
        <label className="form-label" for="loginPassword" style={{marginLeft:"35vw",color:"white"}}>Re-Enter Password</label>
      </div>

      <div className="row mb-4">
        <div className="col-md-6 d-flex justify-content-center">

          <div className="form-check mb-3 mb-md-0">
            <input className="form-check-input" type="checkbox" value="" id="loginCheck" style={{marginLeft:"32vw"}}/>
            <label className="form-check-label" for="loginCheck" style={{marginLeft:"1vw"}} >Remember me </label>
          </div>
        </div>
      </div>
      <button type="submit" className="signup">Sign-Up</button>
      <div class="text-center">
        <p>Already a member? <Link to="/login">Login</Link></p>
      </div>
    </form>
  </div>
</div>
      </>
      )
}
