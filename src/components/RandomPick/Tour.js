import React from "react";
import { FaHeart,FaRegHeart } from 'react-icons/fa';
import "./random.css";

const Tour = (props) => {
  let { id, name, info, image, price } = props.tour;
  let { removeTour } = props;
  return (
    <div>
    <div className=" random-cont">
      <div>
      <FaHeart style={{ color: 'red', fontSize: '24px',cursor:'pointer' }} />
      <FaRegHeart style={{ color: 'black', fontSize: '24px',cursor:'pointer' }} />
        <img src={image} style={{ width: 400, marginBottom: 12 }}></img>
        <p>{price}₹</p>
      </div> 
      <div className="innerrandom-cont">
        <p>{name}</p>
        <p>{info}</p>
        <button className="tourbtn" onClick={() => removeTour(id)}>Not Interested</button>
      </div>
    </div>
    </div>
  );
};

export default Tour;
