import React from 'react'
import Classes from './SuperRichDatabase.module.css'
import Feature2 from "../../assets/images/feature2.webp";
const SuperRichDatabase = () => {
  return (
    <div className={`${Classes.identifyRockWrapper} mt-4`}>
      <div className="container">
        <div className="row">
        <div className="col-md-7 d-flex flex-column justify-content-center">
            <h1 className={Classes.title}>Super rich database</h1>
            <p className={Classes.description}>Get access to a huge growing database of rocks and get everything you want to know about rocks.</p>
          </div>
          <div className="col-md-5">
            <img src={Feature2} alt="IdentigyImg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuperRichDatabase