import React from "react"
import Heading from "../../common/Heading"
import { trending } from "../../data/Data"
import "./trending.css"

const Top = () => {
  return (
    <>
      <section className='awards padding'>
        <div className='container'>
          <Heading title='Here are some suggested Locations...' subtitle='Top Trending' />
          <div className='content grid3 mtop'>
            {trending.map((item, index) => (
              <div className='box' key={index}>
                <img src={item.cover} alt='' />
                <div className='overlay'>
                  <h5>{item.name}</h5>
                  <p>
                    <label>{item.Villas}</label>
                  </p>
                </div>
              </div>
            ))}
        </div>
</div>
      </section>
    </>
  )
}

export default Top
