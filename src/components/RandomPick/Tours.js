import React from "react";
import data from "./data.js";
import Tour from "./Tour.js";
import "./Tours.css";
import { useDispatch, useSelector } from "react-redux";
import { FILLTOURS } from "../../Redux/Slices/CountSlice.js";
import { NavLink } from "react-router-dom";
import { FaHeart } from 'react-icons/fa';



const Tours = () => {
  const count = useSelector((state) => state.value);
  const tours=useSelector(state=>state.toursData)
  const dispatch=useDispatch()
  // console.log(tours)
  
/*
  function removeTour(id) {
    console.log(id)
    const newTours = tours.filter((tour) => {
      return tour.id !== id;
    });
    dispatch(LEFTTOURS(newTours))
  }
    */ 


  if (tours.length === 0) {
    return (
      <div className="ToursCont">
        <h1>No Tours Left</h1>
        <button className="ToursContbtn" onClick={()=>dispatch(FILLTOURS(data))} >
          Refresh 
        </button>
      </div>
    );
  }

  return (
    <>
    <div
      style={{
        backgroundColor: "rgb(247, 233, 216)",
        textAlign: "right",
        paddingRight: "20rem",
        paddingTop: "1rem",
      }}
    >
      <NavLink to='/likedItems'>
        <button
          className="hdr-btn"
          style={{
            padding: ".5em",
            borderRadius: "2em",
            border:'none',
            fontSize: "0.8em",
            cursor: "pointer",
            paddingInline:"14px",
            
          }}
        >
          <FaHeart style={{ color: 'red', fontSize: '1.8em' }} />
          <h5 style={{color:"black"}}>{count}</h5>
        </button>
      </NavLink>
    </div>
      <div className="plancont ">
        <h1 className="innerplancont"> Plan With us...</h1>
        <div className="ToursCont2">
          {tours.map((tour) => {
            return <Tour key={tour.id} tour={tour}  />;
          })}
        </div>
      </div>
    </>
  );
};

export default Tours;


