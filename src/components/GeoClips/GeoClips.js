import React, { useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import Heart from 'react-animated-heart'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import geoinfo from './geoinfo.json'
import {
  WhatsappShareButton,
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
} from 'react-share'
import { FaWhatsapp, FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { WhatsappIcon, FacebookIcon, TwitterIcon, EmailIcon } from 'react-share'

function GeoClips() {
  const [geoInfo, setGeoInfo] = useState(geoinfo)
  const [isClick, setClick] = useState(false)
  const [sharePopup, setSharePopup] = useState(null)

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

  const handleShareClick = (event, itemId) => {
    event.stopPropagation()
    setSharePopup((prevPopup) => (prevPopup === itemId ? null : itemId))
  }

  const handleClosePopup = () => {
    setSharePopup(null)
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

      {geoInfo.map((item) => (
        <Card
          key={item.id}
          className='card'
          data-description={item.description}
        >
          <CardContent>
            <div className='image-container'>
              <img src={item.img} alt='Earth' className='card-image' />
            </div>

            <Typography
              gutterBottom
              variant='h5'
              component='div'
              className='card-title'
              style={{ color: '#345a8b' }}
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
            <Button
              className={`like-button ${item.isMarked ? 'liked' : ''}`}
              size='small'
              onClick={(event) => handleShareClick(event, item.id)}
              style={{
                backgroundColor: '#345a8b ',
                color: '#fff',
                borderRadius: '6px',
                padding: '8px 16px',
                fontWeight: 'bold',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                transition:
                  'background-color 0.3s, transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer',
                textTransform: 'uppercase',
              }}
            >
              Share
            </Button>

            <div className='App'>
              <Heart
                isClick={item.isClick}
                onClick={() => handleHeartClick(item.id)}
              />
            </div>
          </CardActions>

          {sharePopup === item.id && (
            <div className='share-popup'>
              <div className='share-popup-header'>Share via</div>
              <div className='share-popup-icons'>
                <a
                  href={`mailto:?subject=${encodeURIComponent(
                    item.topic
                  )}&body=${encodeURIComponent(
                    `${item.topic}\n\n${item.description}\n\n${item.link}`
                  )}`}
                  className='share-button'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaEnvelope size={32} />
                </a>

                <a
                  href={`whatsapp://send?text=${encodeURIComponent(
                    `${item.topic}\n\n${item.description}\n\n${item.link}`
                  )}`}
                  className='share-button'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaWhatsapp size={32} />
                </a>

                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    `${item.link}`
                  )}&text=${encodeURIComponent(
                    `${item.topic}\n\n${item.description}`
                  )}`}
                  className='share-button'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaTwitter size={32} />
                </a>

                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    `${item.link}`
                  )}&quote=${encodeURIComponent(
                    `${item.topic}\n\n${item.description}`
                  )}`}
                  className='share-button'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaFacebook size={32} />
                </a>
              </div>
              <Button className='close-button' onClick={handleClosePopup}>
                Close
              </Button>
            </div>
          )}
        </Card>
      ))}
    </div>
  )
}

export default GeoClips
