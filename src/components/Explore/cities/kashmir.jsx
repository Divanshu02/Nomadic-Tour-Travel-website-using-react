import React from "react"
import { jannat } from "../../data/Data"
const kashmir = () => {
  return (
    <>
      <div className='recent content grid3 mtop' style={{margin:"80px"}}>
        {jannat.map((val, index) => {
          const { cover, category, overview, name} = val
          return (
              <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background:"#ff98001a", color: "#ff9800" }}>{category}</span>
                  <i className='fa fa-heart'></i>
                </div>
                <button className="reset-button"><h4>{name}</h4></button>
                <p>
                {overview}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default kashmir