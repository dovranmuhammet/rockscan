import React from 'react'
import Classes from './SuperRichDatabase.module.css'
import Feature2 from '../../assets/images/feature2.webp'
import geoinfo from '../GeoClips/geoinfo.json'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import { Fade } from 'react-reveal'

const SuperRichDatabase = () => {
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
            <Fade duration={1000} delay={500}>
              <h1
                className='titleGeoclips'
                style={{
                  color: '#000',
                  fontSize: '3.5rem',
                  lineHeight: '1.2',
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Microsoft YaHei"',
                  fontWeight: 'bold',
                  marginTop: '77px',
                }}
              >
                Geoclips
              </h1>
            </Fade>
            <Fade duration={1000} delay={1000}>
              <h2
                className='subtitleGeoclips'
                style={{
                  color: '#666',
                  fontSize: '1.5rem',
                  marginTop: '1.5rem',
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Microsoft YaHei"',
                }}
              >
                Explore the Fascinating World of Geology
              </h2>
            </Fade>
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
                      <Typography gutterBottom variant='h5' component='div'>
                        {item.topic}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size='small' color='primary'>
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
