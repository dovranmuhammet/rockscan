import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import GeoClipscss from './GeoClips.css'
import geoinfo from './geoinfo.json'

function GeoClips() {
  const [geoInfo, setGeoInfo] = useState(geoinfo)

  const handleMarkClick = (itemId) => {
    const updatedGeoInfo = geoInfo.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          isMarked: !item.isMarked,
        }
      }
      return item
    })
    setGeoInfo(updatedGeoInfo)
  }

  return (
    <div className='card-container'>
      {geoInfo.map((item) => (
        <Card key={item.id} className='card'>
          <CardContent>
            <div
              className={`mark ${item.isMarked ? 'clicked' : ''}`}
              onClick={() => handleMarkClick(item.id)}
            ></div>
            <div className='image-container'>
              <img src={item.img} alt='Earth' className='card-image' />
            </div>
            <Typography
              gutterBottom
              variant='h5'
              component='div'
              className='card-title'
            >
              {item.topic}
            </Typography>
            <Typography
              variant='body2'
              color='text.secondary'
              className='card-description'
            >
              {item.description}
            </Typography>
          </CardContent>
          <CardActions className='card-actions'>
            <Button size='small'>Share</Button>
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
