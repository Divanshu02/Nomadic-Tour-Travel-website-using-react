import React from "react"
import "./footer.css"

const Footer = () => {
return (
  <>
    <footer>
      <div className='container'>
        <div className='box'>
          <div className='logo'>
          <img src='./images/logo-bg.png' alt='' />
            <p>Receive Updates, Hot deals, Discounts sent straignt in your inbox every month</p>
            <div className='input flex'>
              <input type='text' placeholder='Email Address' />
              <button style={{backgroundColor: "#fff4e4", color:"#1d2636"}}>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p style={{fontSize:"12px", marginBottom:"0px", padding:"12px"}}><b>TOP HOTELS IN INDIA </b>: 
Fairmont Jaipur, St Regis Goa, Six Senses Fort Barwara, W Goa, Grand Hyatt Goa, Shangri-La Bangalore, The St Regis Mumbai, Taj Rishikesh, Grand Hyatt Mumbai, Le Meridien Delhi, Rambagh Palace Jaipur, Leela Palace Chennai, The Leela Palace Udaipur, Taj Lake Palace Udaipur, Jw Marriott Chandigarh, Alila Diwa Goa, Le Meridien Goa, Taj Lands End Mumbai, Itc Grand Chola Chennai, Itc Maratha Mumbai, Oberoi Udaivilas, Jai Mahal Palace Jaipur, Taj Mahal Tower Mumbai, Marriott Suites Pune, Park Hyatt Chennai, The Leela Palace Jaipur, Jw Marriott Mumbai Sahar, Jw Marriott Mumbai Juhu, The Ritz Carlton Bengaluru, The Oberoi New Delhi, Taj Resort & Convention Centre Goa, Taj Bengal Kolkata, Taj Coromandel Chennai, The Oberoi Gurgaon, The Westin Goa, Jw Marriott Hotel Pune, The Leela Palace New Delhi, Taj West End Bengaluru, The Taj Mahal Palace Mumbai</p>
        </div>
    </footer>
    <div className='legal'>
      <span>Nomadic... Spreading the travel bug since © 2022.</span>
    </div>
  </>
)
}

export default Footer
