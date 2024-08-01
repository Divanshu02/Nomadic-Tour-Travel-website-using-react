import React from "react";
import Heading from "../../common/Heading";
import { Advan } from "../../data/Data";
import "./style.css";
const advanture = () => {
  return (
    <>
      <section className="awards padding">
        <div className="container">
          <Heading
            title="Best Advanturous Activities"
            subtitle="Top Trending..."
          />
          <div className="content grid3 mtop">
            {Advan.map((item, index) => (
              <div className="box" key={index}>
                <img src={item.cover} alt="" />
                <div className="overlay">
                  <button
                    type="button"
                    class="btn btn-primary,reset-button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    style={{ color: "white" }}
                  >
                    <h5>{item.name}</h5>
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
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">top locations</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default advanture;
