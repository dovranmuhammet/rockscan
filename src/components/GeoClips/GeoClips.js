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
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '80px',
        justifyContent: 'center',
        marginTop: '40px',
        marginBottom: '40px',
      }}
    >
      {geoInfo.map((item) => (
        <Card
          key={item.id}
          sx={{
            maxWidth: 345,
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
            transition: 'box-shadow 0.3s ease-in-out',
            '&:hover': {
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            },
          }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant='h5'
              component='div'
              style={{
                fontWeight: 'bold',
                marginBottom: '10px',
                textAlign: 'center',
              }}
            >
              {item.topic}
            </Typography>
            <Typography
              variant='body2'
              color='text.secondary'
              style={{ fontStyle: 'italic', lineHeight: '1.4' }}
            >
              {item.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  )
}

export default GeoClips
