import React, { useEffect, useState } from 'react'
import Classes from './Banner.module.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import rockDataJson from '../RockList/rocks.json'

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
                    backgroundColor: '#345a8b ',
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
            {/* <div className='card-container'>
              {rockDataJson.slice.map((rock) => (
                <Rock key={rock.name} rock={rock} extractActive={false} />
              ))}
            </div> */}
            <div className='card-container'>
              {rockDataJson.slice(0, 6).map((rock) => (
                <div className='card'>
                  <Card sx={{ maxWidth: 500 }}>
                    <CardActionArea>
                      <CardMedia
                        component='img'
                        height='240'
                        image={rock.wikiImage}
                        alt={rock.name}
                        extractActive={false}
                        className={Classes.zoomImage}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant='h5'
                          component='div'
                          style={{
                            textAlign: 'center',
                            color: '#22447b',
                            fontWeight: '550',
                          }}
                        >
                          {rock.name}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions
                      style={{
                        justifyContent: 'center',
                        '& button:hover': {
                          backgroundColor: '#22447b',
                          color: '#fff',
                        },
                      }}
                    >
                      <Button
                        className={Classes.learnButton}
                        size='small'
                        color='primary'
                        href='/rocks'
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
    </div>
  )
}

export default Banner
