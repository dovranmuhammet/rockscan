import React from "react";
import Classes from "./IdentifyRock.module.css";
import IdentigyImg from "../../assets/images/feature1.webp";

const IdentifyRock = () => {
  return (
    <div id="Features" className={`${Classes.identifyRockWrapper} mt-4`}>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <img src={IdentigyImg} alt="IdentigyImg" />
          </div>
          <div className="col-md-7 d-flex flex-column justify-content-center">
            <h1 className={Classes.title}>Identify rocks <br /> with a snap</h1>
            <p className={Classes.description}>Simply take or upload a photo of any rock, and get accurate ID results within seconds.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentifyRock;
