import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import geoInfo from './geoinfo.json'
import Geocss from './GeoClips.css'

function GeoClips() {
  return (
    <div className='card-container'>
      {geoInfo.map((item) => (
        <Card key={item.id} className='card'>
          <CardContent>
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
            <Button size='small'>Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  )
}

export default GeoClips
