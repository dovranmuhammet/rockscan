import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import geoInfo from './geoinfo.json'
import Geocss from './GeoClips.css'

function GeoClips() {
  const [data, useData] = useState([geoInfo])

  console.log(data.map((item) => item.topic))

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {data.map((item) => item[0].topic)}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {data.map((item) => item[0].description)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Share</Button>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  )
}
export default GeoClips
