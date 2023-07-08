import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import {
  Button,
  IconButton,
  CardActions,
  Select,
  MenuItem,
} from '@mui/material'
import { FaWhatsapp, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa'
import ShareIcon from '@mui/icons-material/Share'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import rockDataJson from './rocks.json'
import axios from 'axios'

const RockList = () => {
  const [rockData, setRockData] = useState(rockDataJson)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('all')
  const [sharePopup, setSharePopup] = useState(null)

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
    setSelectedType('all') // Reset the selected type when the search term changes
  }

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value)
  }

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const filteredRocks = rockData.filter((rock) => {
    const isMatchedName = rock.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    const isMatchedType = selectedType === 'all' || rock.type === selectedType
    return isMatchedName && isMatchedType
  })

  const getRockWikipediaData = async (name) => {
    const data = await axios.get(
      `https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=extracts&exintro=&explaintext=&format=json&titles=${name}`
    )
    const pageId = Object.keys(data.data.query.pages)[0]
    const wikiUrl = `https://en.wikipedia.org/?curid=${pageId}`

    if (window.innerWidth <= 768) {
      window.location.href = wikiUrl
    } else {
      window.open(wikiUrl, '_blank')
    }
  }

  const handleShareClick = (event, rock) => {
    event.stopPropagation()
    setSharePopup(rock)
  }

  const handleClosePopup = () => {
    setSharePopup(null)
  }

  const shareWithEmail = (rock) => {
    const subject = 'Rock Data'
    const body = `Check out this amazing rock: ${rock.name}\n\nDescription: ${rock.description}\n\nVisit my website at 'https://www.rockscanner.com/'`
    const encodedSubject = encodeURIComponent(subject)
    const encodedBody = encodeURIComponent(body)
    const emailUrl = `mailto:?subject=${encodedSubject}&body=${encodedBody}`
    window.open(emailUrl)
  }

  const shareWithWhatsApp = (rock) => {
    const message = `Check out this amazing rock: ${rock.name}\n\nDescription: ${rock.description}\n\nVisit my website at 'https://www.rockscanner.com/'`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  const shareWithTwitter = (rock) => {
    const message = `Check out this amazing rock: ${rock.name}\n\nDescription: ${rock.description}\n\nVisit my website at 'https://www.rockscanner.com/'`
    const encodedMessage = encodeURIComponent(message)
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedMessage}`
    window.open(twitterUrl, '_blank')
  }

  const shareWithInstagram = (rock) => {
    const message = `Check out this amazing rock: ${rock.name}\n\nDescription: ${rock.description}\n\nVisit my website at 'https://www.rockscanner.com/'`
    const encodedMessage = encodeURIComponent(message)
    const instagramUrl = `https://www.instagram.com/?${encodedMessage}`
    window.open(instagramUrl, '_blank')
  }

  return (
    <div>
      <div
        className='input'
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <input
          type='search'
          placeholder='Search rocks'
          value={searchTerm}
          onChange={handleSearchChange}
          style={{
            padding: '12px 18px',
            borderRadius: '20px',
            border: '1.5px solid #ddd',
            boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
            outline: 'none',
            fontSize: '16px',
            width: '800px',
            margin: '10px',
          }}
        />
        <Select
          value={selectedType}
          onChange={handleTypeChange}
          style={{ margin: '10px' }}
        >
          <MenuItem value='all'>All Types</MenuItem>
          <MenuItem value='Igneous'>Igneous</MenuItem>
          <MenuItem value='Sedimentary'>Sedimentary</MenuItem>
          <MenuItem value='Metamorphic'>Metamorphic</MenuItem>
        </Select>
      </div>

      <div className='card-container'>
        {filteredRocks.map((rock) => (
          <Card key={rock.name} className='card'>
            <CardContent>
              <div className='image-container'>
                <img src={rock.wikiImage} alt='Earth' className='card-image' />
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
                {rock.name}
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
                className='card-description'
              >
                {rock.description}
              </Typography>
            </CardContent>

            <CardActions className='card-actions'>
              <IconButton
                style={{
                  backgroundColor: '#345a8b',
                  color: '#fff',
                  borderRadius: '50%',
                  padding: '8px',
                  marginLeft: '8px',
                }}
                onClick={(event) => handleShareClick(event, rock)}
              >
                <ShareIcon />
              </IconButton>
              <Button
                variant='contained'
                onClick={() => getRockWikipediaData(rock.name)}
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
                Learn More
              </Button>
            </CardActions>

            {sharePopup === rock && (
              <div
                className='share-popup'
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '10px',
                }}
              >
                <Button
                  className='close-button'
                  onClick={handleClosePopup}
                  style={{
                    fontWeight: 'bold',
                    top: '22px',
                    left: '-40px',
                  }}
                >
                  Close
                </Button>
                <div
                  className='share-popup-icons'
                  style={{ marginTop: '35px', marginLeft: '-15px' }}
                >
                  <IconButton
                    className='share-icon'
                    onClick={() => shareWithWhatsApp(rock)}
                  >
                    <FaWhatsapp
                      size={30}
                      style={{ color: 'var(--bs-link-color)' }}
                    />
                  </IconButton>

                  <IconButton
                    className='share-icon'
                    onClick={() => shareWithEmail(rock)}
                  >
                    <FaEnvelope
                      style={{ color: 'var(--bs-link-color)' }}
                      size={30}
                    />
                  </IconButton>
                </div>
                <div
                  className='share-popup-icons'
                  style={{ marginTop: '35px' }}
                >
                  <IconButton
                    className='share-icon'
                    onClick={() => shareWithTwitter(rock)}
                  >
                    <FaTwitter
                      style={{ color: 'var(--bs-link-color)' }}
                      size={30}
                    />
                  </IconButton>

                  <IconButton
                    className='share-icon'
                    onClick={() => shareWithInstagram(rock)}
                  >
                    <FaInstagram
                      style={{ color: 'var(--bs-link-color)' }}
                      size={30}
                    />
                  </IconButton>
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
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
    </div>
  )
}

export default RockList
