import React, { useState } from 'react'
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

  return (
    <div className='card-container'>
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
