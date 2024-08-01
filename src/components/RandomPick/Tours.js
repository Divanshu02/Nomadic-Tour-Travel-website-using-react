import React, { useState } from "react";
import data from "./data.js";
import Tour from "./tour.js";
import "./random.css";

const Tours = () => {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(newTours);
  } 

  if (tours.length === 0) {
    return (
      <div className="ToursCont">
        <h1>No Tours Left</h1>
        <button className="ToursContbtn" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="plancont ">
        <h1 className="innerplancont"> Plan With us...</h1>
        <div className="ToursCont2 ">
          {tours.map((tour) => {
            return <Tour key={tour.id} tour={tour} removeTour={removeTour} />;
          })}
        </div>
        <h2>Not Interested</h2>
      </div>
    </>
  );
};

export default Tours;
