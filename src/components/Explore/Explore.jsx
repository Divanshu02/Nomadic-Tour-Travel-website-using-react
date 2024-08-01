import React, { useState } from "react";
import Back from "../common/Back";
import Mumbai from "./cities/mumbai";
import Delhi from "./cities/delhi";
import Shimla from "./cities/shimla";
import Goa from "./cities/goa";
import Kashmir from "./cities/kashmir";
import img from "../images/about.jpg";
import Manali from "./cities/manali";
import Dubai from "./cities/dubai";

const Explore = () => {
  const [text, setText] = useState("Delhi");
  return (
    <>
      <Back
        name="Heyy!!"
        title="Explore By Destinations"
        cover={img}
        text={text}
        setText={setText}
      />
      {(text === "") && <Delhi />}
      {((text === "Mumbai")||(text=="mumbai")) && <Mumbai />}
      {(text === "Delhi"||(text=="delhi")) && <Delhi />}
      {(text === "Shimla"||(text=="shimla")) && <Shimla />}
      {(text === "Goa"||(text=="goa")) && <Goa />}
      {(text === "Kashmir"||(text=="kashmir")) && <Kashmir />}
      {(text === "manali"||(text=="Manali")) && <Manali />}
      {(text === "dubai"||(text=="Dubai")) && <Dubai />}
    </> 
  );
};  

export default Explore;
