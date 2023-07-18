import React, { useState } from 'react'
import Card from '@mui/material/Card'
import FavoriteIcon from '@mui/icons-material/Favorite'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import {
  Button,
  IconButton,
  CardActions,
  MenuItem,
  TextField,
  useMediaQuery,
} from '@mui/material'
import { FaWhatsapp, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa'
import ShareIcon from '@mui/icons-material/Share'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import rockDataJson from './rocks.json'
import axios from 'axios'

const RockList = () => {
  const isMobile = useMediaQuery('(max-width: 600px)')
  const [rockData, setRockData] = useState(rockDataJson)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('all')
  const [sharePopup, setSharePopup] = useState(null)
  const [favorites, setFavorites] = useState([])
  const [expandedCharacteristics, setExpandedCharacteristics] = useState([])
  const [expandedApplications, setExpandedApplications] = useState([])
  const [expandedSignificance, setExpandedSignificance] = useState([])
  const [expandedFormation, setExpandedFormation] = useState([])

  const handleFavoriteClick = (rock) => {
    const updatedFavorites = favorites.includes(rock)
      ? favorites.filter((favorite) => favorite !== rock)
      : [...favorites, rock]
    setFavorites(updatedFavorites)
  }

  const isRockFavorite = (rock) => {
    return favorites.includes(rock)
  }

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value
    setSearchTerm(searchTerm)

    // Find a rock whose name matches the search term
    const matchedRock = rockData.find(
      (rock) => rock.name.toLowerCase() === searchTerm.toLowerCase()
    )

    // Set the selected type based on the search term
    if (matchedRock) {
      setSelectedType(matchedRock.type)
    } else {
      setSelectedType('all')
    }
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
    const body = `Check out this amazing rock: ${rock.name}\n\nDescription: ${rock.description}\n\nVisit my website at https://www.rockscanner.com/`
    const encodedSubject = encodeURIComponent(subject)
    const encodedBody = encodeURIComponent(body)
    const emailUrl = `mailto:?subject=${encodedSubject}&body=${encodedBody}`
    window.open(emailUrl)
  }

  const shareWithWhatsApp = (rock) => {
    const message = `Check out this amazing rock: ${rock.name}\n\nDescription: ${rock.description}\n\nVisit my website at https://www.rockscanner.com/`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  const shareWithTwitter = (rock) => {
    const message = `Check out this amazing rock: ${rock.name}\n\nDescription: ${rock.description}\n\nVisit my website at https://www.rockscanner.com/`
    const encodedMessage = encodeURIComponent(message)
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedMessage}`
    window.open(twitterUrl, '_blank')
  }

  const shareWithInstagram = (rock) => {
    const message = `Check out this amazing rock: ${rock.name}\n\nDescription: ${rock.description}\n\nVisit my website at https://www.rockscanner.com/`
    const encodedMessage = encodeURIComponent(message)
    const instagramUrl = `https://www.instagram.com/?${encodedMessage}`
    window.open(instagramUrl, '_blank')
  }

  const handleReadMoreClick = (section, rock) => {
    switch (section) {
      case 'characteristics':
        setExpandedCharacteristics([...expandedCharacteristics, rock])
        break
      case 'applications':
        setExpandedApplications([...expandedApplications, rock])
        break
      case 'significance':
        setExpandedSignificance([...expandedSignificance, rock])
        break
      case 'formation':
        setExpandedFormation([...expandedFormation, rock])
        break
      default:
        break
    }
  }

  const handleReadLessClick = (section, rock) => {
    switch (section) {
      case 'characteristics':
        setExpandedCharacteristics(
          expandedCharacteristics.filter((r) => r !== rock)
        )
        break
      case 'applications':
        setExpandedApplications(expandedApplications.filter((r) => r !== rock))
        break
      case 'significance':
        setExpandedSignificance(expandedSignificance.filter((r) => r !== rock))
        break
      case 'formation':
        setExpandedFormation(expandedFormation.filter((r) => r !== rock))
        break
      default:
        break
    }
  }

  const readMoreButtonStyles = {
    fontWeight: 'bold',
    color: 'rgb(52, 90, 139)',
    cursor: 'pointer',
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
            borderRadius: '8px',
            border: '1.5px solid #ddd',
            boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
            outline: 'none',
            fontSize: '16px',
            width: isMobile ? '100%' : '800px',
            maxWidth: '800px', // Adjust the maxWidth as needed
            margin: '10px',
          }}
        />

        <TextField
          select
          label='Rock Type'
          value={selectedType}
          onChange={handleTypeChange}
          variant='outlined'
          style={{
            margin: '10px',
            width: '200px',
            borderRadius: '8px',
            background: '#fff',
          }}
        >
          <MenuItem value='all'>All Types</MenuItem>
          <MenuItem value='Igneous'>Igneous</MenuItem>
          <MenuItem value='Sedimentary'>Sedimentary</MenuItem>
          <MenuItem value='Metamorphic'>Metamorphic</MenuItem>
          <MenuItem value='Mineral'>Mineral</MenuItem>
        </TextField>
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
                style={{
                  marginTop: '15px',
                  lineHeight: '25px',
                  color: 'rgb(51, 51, 51)',
                  fontSize: '14px',
                }}
              >
                {rock.description}
              </Typography>
              {/* Render the formation description */}
              <Typography
                variant='body2'
                className='card-section'
                style={{
                  lineHeight: '25px',
                  color: 'rgb(51, 51, 51)',
                  fontSize: '14px',
                  fontStyle: 'italic',
                  marginTop: '10px',
                }}
              >
                <strong>Formation:</strong>{' '}
                {expandedFormation.includes(rock) ? (
                  <>
                    {rock.formation.description}
                    <Button
                      variant='text'
                      onClick={() => handleReadLessClick('formation', rock)}
                      style={readMoreButtonStyles}
                    >
                      Read Less
                    </Button>
                  </>
                ) : (
                  <Button
                    variant='text'
                    onClick={() => handleReadMoreClick('formation', rock)}
                    style={readMoreButtonStyles}
                  >
                    Read More
                  </Button>
                )}
              </Typography>
              {/* Render the characteristics */}
              <Typography
                variant='body2'
                className='card-section'
                style={{
                  lineHeight: '25px',
                  color: 'rgb(51, 51, 51)',
                  fontSize: '14px',
                  fontStyle: 'italic',
                }}
              >
                <strong>Characteristics:</strong>
                {expandedCharacteristics.includes(rock) ? (
                  <>
                    <ul>
                      <li>{rock.characteristics.color}</li>
                      <li>{rock.characteristics.composition}</li>
                      <li>{rock.characteristics.hardness}</li>
                      <li>{rock.characteristics.density}</li>
                      <li>{rock.characteristics.porosity}</li>
                    </ul>
                    <Button
                      variant='text'
                      onClick={() =>
                        handleReadLessClick('characteristics', rock)
                      }
                      style={readMoreButtonStyles}
                    >
                      Read Less
                    </Button>
                  </>
                ) : (
                  <Button
                    variant='text'
                    onClick={() => handleReadMoreClick('characteristics', rock)}
                    style={readMoreButtonStyles}
                  >
                    Read More
                  </Button>
                )}
              </Typography>
              {/* Render the applications */}
              <Typography
                variant='body2'
                className='card-section'
                style={{
                  lineHeight: '25px',
                  color: 'rgb(51, 51, 51)',
                  fontSize: '14px',
                  fontStyle: 'italic',
                }}
              >
                <strong>Applications:</strong>
                {expandedApplications.includes(rock) ? (
                  <>
                    <ul>
                      <li>{rock.applications.construction}</li>
                      <li>{rock.applications.monuments}</li>
                      <li>{rock.applications.sculptures}</li>
                    </ul>
                    <Button
                      variant='text'
                      onClick={() => handleReadLessClick('applications', rock)}
                      style={readMoreButtonStyles}
                    >
                      Read Less
                    </Button>
                  </>
                ) : (
                  <Button
                    variant='text'
                    onClick={() => handleReadMoreClick('applications', rock)}
                    style={readMoreButtonStyles}
                  >
                    Read More
                  </Button>
                )}
              </Typography>
              {/* Render the scientific significance */}
              <Typography
                variant='body2'
                className='card-section'
                style={{
                  lineHeight: '25px',
                  color: 'rgb(51, 51, 51)',
                  fontSize: '14px',
                  fontStyle: 'italic',
                }}
              >
                <strong>Scientific Significance:</strong>{' '}
                {expandedSignificance.includes(rock) ? (
                  <>
                    {rock.scientificSignificance}
                    <Button
                      variant='text'
                      onClick={() => handleReadLessClick('significance', rock)}
                      style={readMoreButtonStyles}
                    >
                      Read Less
                    </Button>
                  </>
                ) : (
                  <Button
                    variant='text'
                    onClick={() => handleReadMoreClick('significance', rock)}
                    style={readMoreButtonStyles}
                  >
                    Read More
                  </Button>
                )}
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

              <IconButton
                style={{
                  backgroundColor: isRockFavorite(rock) ? 'red' : '#345a8b',
                  color: '#fff',
                  borderRadius: '50%',
                  padding: '8px',
                  marginLeft: '8px',
                }}
                onClick={() => handleFavoriteClick(rock)}
              >
                <FavoriteIcon />
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
