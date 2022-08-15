import React from "react";
import Classes from "./GetRockIdentifierNow.module.css";
import ScannerImg from "../../assets/images/download_logo.webp";
import QRCodeImg from "../../assets/images/qrcode.webp";
import GoogleStoreImg from "../../assets/images/google_play.webp";
import AppleStoreImg from "../../assets/images/app_store.webp";

const GetRockIdentifierNow = () => {
  return (
    <div id='Download' className={Classes.getIdentifierWrapper}>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="d-flex align-items-center gap-5">
              <div>
                <img
                  src={ScannerImg}
                  className={Classes.scannerImg}
                  alt="ScannerImg"
                />
              </div>
              <div>
                <h1 className={Classes.title}>Get Rock Identifier now</h1>
                <p className={Classes.description}>
                  Try out Rock Identifier app on your phone and identify
                  thousands of rocks for free Learn more info about rocks from
                  our rich and growing database.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className={`${Classes.downloadSection} d-flex align-items-center gap-4`}
            >
              <div className={`${Classes.qrCode} position-relative`}>
                <img src={QRCodeImg} alt="QRCodeImg" />
                <p className={`${Classes.qrCodeInfo} position-absolute`}>
                  Scan QR code to download
                </p>
              </div>
              <div>
                <div className={`${Classes.appStore} mb-3`}>
                  <img src={GoogleStoreImg} alt="GoogleStoreImg" />
                </div>
                <div className={Classes.appStore}>
                  <img src={AppleStoreImg} alt="AppleStoreImg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetRockIdentifierNow;
