import React from "react";
const Back = ({ name, title, cover, text, setText }) => {
  const handleOnchange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <div className="back">
        <div className="container">
          <span>{name}</span>
          <h1>{title}</h1>
          <div class="input-group">
            <div class="form-outline">
              <input
                type="search"
                id="form1"
                class="form-control"
                placeholder="Delhi.."
                value={text}
                onChange={handleOnchange}
              />
            </div>
            <button
              type="button"
              class="btn btn-dark"
              style={{
                height: "37px",
                width: "40px",
                backgroundColor: "black",
              }}
              // onClick={handleClick}
            >
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
        <img src={cover} alt="" />
      </div>
      {/* <div>{handleClick}</div> */}
    </>
  );
};

export default Back;
