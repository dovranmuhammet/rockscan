import React from 'react'
import { useNavigate } from 'react-router-dom'
import Classes from './SuperRichDatabase.module.css'
import Feature2 from '../../assets/images/feature2.webp'
import geoinfo from '../GeoClips/geoinfo.json'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'

const SuperRichDatabase = () => {
  const navigate = useNavigate()

  const navigateToGeoClips = () => {
    navigate('/geoclips')
  }

  return (
    <div className={`${Classes.identifyRockWrapper} mt-4`}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-7 d-flex flex-column justify-content-center'>
            <h1 className={Classes.title}>Super rich database</h1>
            <p className={Classes.description}>
              Get access to a huge growing database of rocks and get everything
              you want to know about rocks.
            </p>
          </div>
          <div className='col-md-5'>
            <img src={Feature2} alt='IdentigyImg' />
          </div>

          {/* Card-Component */}
          <div style={{ textAlign: 'center' }}>
            <h1
              className='titleGeoclips'
              style={{
                color: '#22447b',
                fontSize: '2.5rem',
                lineHeight: '1.2',
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Microsoft YaHei"',
                fontWeight: '600',
                marginTop: '77px',
              }}
            >
              Discover the Wonders of Geology
            </h1>

            <h2
              className='subtitleGeoclips'
              style={{
                color: '#333',
                fontSize: '1.5rem',
                marginTop: '1.5rem',
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Microsoft YaHei"',
                animation: 'fadeInUp 1s ease-in-out',
              }}
            >
              Embark on an Enthralling Geological Exploration
            </h2>
          </div>

          <div className='card-container '>
            {geoinfo.slice(0, 4).map((item) => (
              <div key={item.id} className='card'>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      height='140'
                      image={item.img}
                      alt={item.topic}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant='h5'
                        component='div'
                        style={{ color: '#22447b' }}
                      >
                        {item.topic}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions style={{ justifyContent: 'center' }}>
                    <Button
                      size='small'
                      color='primary'
                      onClick={navigateToGeoClips}
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuperRichDatabase
