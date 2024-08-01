import React from "react";
import { list } from "../../data/Data";
import Tranding from "../trips/RomanticTrip";
import "./recentBox.css";

const RecentCard = () => {
  return (
    <>
      <div className="recent content grid3 mtop">
        {list.map((val, index) => {
          const { cover, category, location, name } = val;
          return (
            <div className="box shadow" key={index}>
              <div className="img">
                <img src={cover} alt="" />
              </div>
              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background:
                        category === "40% Off" ? "#25b5791a" : "#ff98001a",
                      color: category === "For Sale" ? "#25b579" : "#ff9800",
                    }}
                  >
                    {category}
                  </span>
                  <button
                    type="button"
                    class="btn btn-primary,reset-button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    id="btn"
                  >
                    <i
                      className="fa fa-heart"
                      onClick={() => {
                        const btn = document.getElementById("btn").children[0];
                        if (btn.style.color === "red") {
                          btn.style.color = "lightgrey";
                        } else {
                          btn.style.color = "red";
                        }
                      }}
                    ></i>
                  </button>
                </div>

                <button
                  type="button"
                  class="btn btn-primary,reset-button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                >
                  <h4>{name}</h4>
                </button>
                <p>
                  <i className="fa fa-location-dot"></i> {location}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {/* model */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" style={{ marginTop: "7em" }}>
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title fs-4" id="exampleModalLabel">
                Added To Favorite!!!
              </h3>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* name model */}
      <div
        class="modal fade"
        id="exampleModal1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-fullscreen">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <Tranding />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentCard;
