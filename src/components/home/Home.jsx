import React from "react"
import Trending from "./trending/trending"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Location from "./location/Location"
import VisitAgain from "./visitAgain/visitAgain"
import Recent from "./recent/Recent"
import Team from "./team/Team"

const Home = () => {
  return (
    <>
      <Hero />
      <Recent />
      <Trending />
      <Location />
      <Featured />
      <Team />
      <VisitAgain />
     </>
  )
}

export default Home
