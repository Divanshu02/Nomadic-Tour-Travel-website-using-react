import React from "react";
import Heading from "../../common/Heading";
import { location } from "../../data/Data";
import Advanture from "./advanture";
import "./style.css";

const Location = () => {
  return (
    <>
      <section className="location padding">
        <div className="container">
          <Heading
            title="Explore By Destination"
            subtitle="May I know what kind of destination you are looking for?"
          />

          <div className="content grid3 mtop">
            {location.map((item, index) => (
              <div className="box" key={index}>
                <img src={item.cover} alt="" />
                <div className="overlay">
                  <button
                    type="button"
                    class="btn btn-primary,reset-button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                  >
                    <h5 style={{ color: "white" }}>{item.name}</h5>
                  </button>
                  <p>
                    <label>{item.Villas}</label>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div
        class="modal fade"
        id="exampleModal2"
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
              <Advanture />
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

export default Location;
