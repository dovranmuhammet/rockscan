import React, { useEffect, useState } from 'react'
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
  const [showTitle, setShowTitle] = useState(false)

  useEffect(() => {
    setShowTitle(true)
  }, [])

  return (
    <div id='home' className={`${Classes.bannerWrapper}`}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-17'>
            <div>
              <h3
                className={`${Classes.bannerTitle} ${
                  showTitle ? Classes.show : ''
                }`}
              >
                <span className={Classes.titleText}>Rock Encyclopedia</span>
                <span className={Classes.titleHighlight}> {''}by RockScan</span>
              </h3>
              <p className={Classes.bannerSubtitle}>
                Online rock encyclopedia and rock identifier
              </p>
              <p className={Classes.bannerDescription}>
                Try out Rock Encyclopedia and identify thousands of rocks for
                free
              </p>
              <div
                style={{
                  textAlign: 'center',
                  '@media screen and (maxWidth: 480px)': {
                    fontSize: '1rem',
                    padding: '2px 8px',
                  },
                }}
              >
                <a
                  href='/rocks'
                  style={{
                    display: 'inline-block',
                    fontSize: '1.5rem',
                    color: '#fff',
                    backgroundColor: 'rgb(120, 155, 200)',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    padding: '12px 24px',
                    border: 'none',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                    transition:
                      'background-color 0.3s, transform 0.3s, box-shadow 0.3s',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontWeight: 'bold',
                  }}
                >
                  Rocks
                </a>
              </div>
            </div>
            <div
              className={`${Classes.downloadSection} d-flex align-items-center gap-4`}
            ></div>
            <div className='box_card'>
              <Slider {...settings}>
                {rockDataJson.map((rock) => (
                  <Rock key={rock.name} rock={rock} extractActive={false} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
