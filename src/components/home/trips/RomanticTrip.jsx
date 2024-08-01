import React from "react";
import Heading from "../../common/Heading";
import { Rtrip } from "../../data/Data";
import "./trips.css";

const RomanticTrip = () => {
  return (
    <>
      <section className="awards padding">
        <div className="container">
          <Heading title="Best Romantic Locations" subtitle="Top Trending..." />
          <div className="content grid3 mtop">
            {Rtrip.map((item, index) => (
              <div className="box" key={index}>
                <img src={item.cover} alt="" />
                <div className="overlay">
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
  );
};

export default RomanticTrip;
