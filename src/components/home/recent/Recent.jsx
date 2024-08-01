import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Hey! Are you looking for help in planning your trip?' subtitle='May I know what kind of trip you are looking for?' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
