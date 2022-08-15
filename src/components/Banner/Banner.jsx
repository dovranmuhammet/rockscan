import React from 'react'
import Classes from './Banner.module.css'
import QRCodeImg from '../../assets/images/qrcode.webp'
import GoogleStoreImg from '../../assets/images/google_play.webp'
import AppleStoreImg from '../../assets/images/app_store.webp'
import BannerRightImg from '../../assets/images/home_front.webp'

const Banner = () => {
  return (
    <div id='home' className={`${Classes.bannerWrapper}`}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-7'>
            <div>
              <h3 className={Classes.bannerTitle}>Rock Identifier</h3>
              <p className={Classes.bannerSubtitle}>
                AI rock expert in your pocket
              </p>
              <p className={Classes.bannerDescription}>
                Online rock encyclopedia and rock identifier
              </p>
              <p className={Classes.bannerSubDescription}>
                Try out Rock Identifier app on your phone and identify thousands
                of rocks for free
              </p>
            </div>
            <div
              className={`${Classes.downloadSection} d-flex align-items-center gap-4`}
            >
              <div className={`${Classes.qrCode} position-relative`}>
                <img src={QRCodeImg} alt='QRCodeImg' />
                <p className={`${Classes.qrCodeInfo} position-absolute`}>
                  Scan QR code to download
                </p>
              </div>
              <div>
                <div className={`${Classes.appStore} mb-3`}>
                  <img src={GoogleStoreImg} alt='GoogleStoreImg' />
                </div>
                <div className={Classes.appStore}>
                  <img src={AppleStoreImg} alt='AppleStoreImg' />
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-5'>
            <img src={BannerRightImg} alt='BannerRightImg' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
