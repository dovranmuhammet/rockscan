import React, { useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import Heart from 'react-animated-heart'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import geoinfo from './geoinfo.json'

function GeoClips() {
  const [geoInfo, setGeoInfo] = useState(geoinfo)
  const [isClick, setClick] = useState(false)

  const handleHeartClick = (itemId) => {
    setGeoInfo((prevGeoInfo) =>
      prevGeoInfo.map((item) =>
        item.id === itemId ? { ...item, isClick: !item.isClick } : item
      )
    )
  }

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className='card-container'>
      <button
        className='up-button'
        onClick={handleScrollToTop}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#345a8b',
          color: '#fff',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          border: 'none',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.3s, transform 0.3s, box-shadow 0.3s',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: '1',
        }}
      >
        <ArrowUpwardIcon style={{ fontSize: '24px' }} />
      </button>
      {/* {Data fetching} */}

      {geoInfo.map((item) => (
        <Card key={item.id} className='card'>
          <CardContent>
            <div className='image-container'>
              <img src={item.img} alt='Earth' className='card-image' />
            </div>

            {/* Topic-Title */}

            <Typography
              gutterBottom
              variant='h5'
              component='div'
              className='card-title'
              style={{ color: '#345a8b' }}
            >
              {item.topic}
            </Typography>

            {/* Description of the topic */}

            <Typography
              variant='body2'
              color='text.secondary'
              className='card-description'
            >
              {item.description}
            </Typography>
          </CardContent>

          {/* Share-Button */}
          <CardActions className='card-actions'>
            <Button
              className={`like-button ${item.isMarked ? 'liked' : ''}`}
              size='small'
            >
              Share
            </Button>

            {/* Heart-Animated-Button */}
            <div className='App'>
              <Heart
                isClick={item.isClick}
                onClick={() => handleHeartClick(item.id)}
              />
            </div>

            {/* Lear-More */}
            <Button
              size='small'
              href='https://education.nationalgeographic.org/resource/resource-library-age-earth/'
              target='_blank'
            >
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  )
}

export default GeoClips
