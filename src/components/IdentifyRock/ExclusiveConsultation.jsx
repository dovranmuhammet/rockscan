import React from 'react'
import Classes from "./IdentifyRock.module.css";
import Feature3 from "../../assets/images/feature3.webp";
const ExclusiveConsultation = () => {
  return (
    <div className={`${Classes.identifyRockWrapper} mt-4`}>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <img src={Feature3} alt="IdentigyImg" />
          </div>
          <div className="col-md-7 d-flex flex-column justify-content-center">
            <h1 className={Classes.title}>Exclusive consultation</h1>
            <p className={Classes.description}>Get identifying advice and explore the magic and mystery of rocks with our rock experts.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExclusiveConsultation