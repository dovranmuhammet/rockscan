import React from 'react'
import Classes from './Banner.module.css'
import Slider from 'react-slick'
import Rock from '../Rock/Rock'
import rockDataJson from '../RockList/rocks.json'

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
}
const Banner = () => {
  return (
    <div id='home' className={`${Classes.bannerWrapper}`}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-17'>
            <div>
              <h3 className={Classes.bannerTitle}>
                Rock Encyclopedia{' '}
                <span style={{ fontSize: '2.5rem', color: '#c7c5b9' }}>
                  by RockScan
                </span>
              </h3>
              <p className={Classes.bannerSubtitle}>
                Online rock encyclopedia and rock identifier
              </p>
              <p className={Classes.bannerDescription}>
                Try out Rock Encyclopedia and identify thousands of rocks for
                free
              </p>
              <div style={{ textAlign: 'center' }}>
                <a
                  href='/rocks'
                  style={{
                    display: 'inline',
                    fontSize: '1.5rem',
                    color: 'brown',
                    width: '100%',
                  }}
                >
                  Rocks{' '}
                </a>
              </div>
              {/* <p className={Classes.bannerSubDescription}>
                Try out Rock Identifier app on your phone and identify thousands
                of rocks for free
              </p> */}
            </div>
            <div
              className={`${Classes.downloadSection} d-flex align-items-center gap-4`}
            ></div>
            <div>
              <Slider {...settings}>
                {rockDataJson.map((rock) => (
                  <Rock key={rock.name} rock={rock} extractActive={false} />
                ))}
              </Slider>
            </div>
          </div>
          {/* <div className='col-md-5'>
            <img src={BannerRightImg} alt='BannerRightImg' />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Banner
