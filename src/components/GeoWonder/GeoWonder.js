import React, { useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import Heart from 'react-animated-heart'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import './GeoWonder.css'
import geoinfo from './geoinfo.json'
import { FaWhatsapp, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa'

function GeoWonder() {
  const [geoInfo, setGeoInfo] = useState(geoinfo)
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

  const toggleDescription = (itemId) => {
    setGeoInfo((prevGeoInfo) =>
      prevGeoInfo.map((item) =>
        item.id === itemId
          ? { ...item, showFullDescription: !item.showFullDescription }
          : item
      )
    )
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
              style={{
                color: 'rgb(34, 68, 123)',
                fontWeight: '550',
                marginTop: '15px',
              }}
            >
              {item.topic}
            </Typography>

            <Typography
              variant='body2'
              color='text.secondary'
              className='card-description-wonder'
              style={{
                marginTop: '15px',
                lineHeight: '25px',
                color: '#333',
                fontSize: '14px',
              }}
            >
              {item.showFullDescription
                ? item.description
                : item.description.split('. ').slice(0, 3).join('. ') + '.'}
            </Typography>

            {item.description.split('. ').length > 1 && (
              <Button
                onClick={() => toggleDescription(item.id)}
                style={{
                  fontWeight: 'bold',
                  marginTop: '10px',
                  color: '#345a8b',
                  cursor: 'pointer',
                }}
              >
                {item.showFullDescription ? 'Read Less' : 'Read More'}
              </Button>
            )}

            {/* Add the animated fun_fact section */}
            <div className='card-fun-fact'>
              <span className='fun-fact-icon' role='img' aria-label='Fun Fact'>
                🎉
              </span>
              Fun Fact: {item.fun_fact}
            </div>

            {/* Add the external links */}
            {item.external_links && item.external_links.length > 0 && (
              <div className='external-links'>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  style={{
                    fontWeight: 'bold',
                    marginBottom: '8px',
                    color: '#345a8b',
                    marginTop: '10px',
                  }}
                >
                  External Links:
                </Typography>
                {item.external_links.map((link) => (
                  <Button
                    key={link.id}
                    variant='outlined'
                    startIcon={<OpenInNewIcon />}
                    href={link.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='external-link-button'
                    style={{
                      color: '#345a8b',
                      borderColor: '#345a8b',
                      marginRight: '10px',
                    }}
                  >
                    {link.title}
                  </Button>
                ))}
              </div>
            )}
          </CardContent>
          <CardActions className='card-actions'>
            <Button
              className={`like-button ${item.isMarked ? 'liked' : ''}`}
              size='small'
              onClick={(event) => handleShareClick(event, item.id)}
              style={{
                backgroundColor: '#345a8b',
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
              <div className='share-popup-icons'>
                <a
                  href={`mailto:?subject=${encodeURIComponent(
                    item.topic
                  )}&body=${encodeURIComponent(
                    `${item.topic}\n\n${item.description}\n\n`
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
                  href={`https://www.instagram.com/share?url=${encodeURIComponent(
                    `${item.link}`
                  )}&caption=${encodeURIComponent(
                    `${item.topic}\n\n${item.description}`
                  )}`}
                  className='share-button'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaInstagram size={32} />
                </a>
              </div>
              <Button
                className='close-button'
                onClick={handleClosePopup}
                style={{
                  fontWeight: 'bold',
                }}
              >
                Close
              </Button>
            </div>
          )}
        </Card>
      ))}
    </div>
  )
}

export default GeoWonder
